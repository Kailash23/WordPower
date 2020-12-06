import {
  NavigationContainerRef,
  NavigationState,
  PartialState,
} from '@react-navigation/native';
import {useState, useEffect, useRef, useCallback} from 'react';

// Methods on the ref - https://reactnavigation.org/docs/navigation-container
export const RootNavigation = {
  navigate(name: string) {
    name;
  },
  goBack() {},
  // The resetRoot method lets you reset the state of the navigation tree to the specified state object
  resetRoot(_state: PartialState<NavigationState> | NavigationState) {}, // eslint-disable-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  //The getRootState method returns the current navigation state containing the navigation states for all navigators in the navigation tree
  getRootState(): NavigationState {
    return {} as any;
  },
  //The getCurrentRoute method returns the route object for the currently focused screen in the whole navigation tree
  getCurrentRoute() {},
};

export const setRootNavigation = (
  ref: React.RefObject<NavigationContainerRef>,
) => {
  for (const method in RootNavigation) {
    RootNavigation[method] = (...args: any) => {
      if (ref.current) {
        return ref.current[method](...args);
      }
    };
  }
};

/**
 * Gets the current screen from any navigation state.
 */
function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>,
): any {
  const route = state.routes[state.index];
  // Found the active route -- return the name
  if (!route.state) {
    return route.name;
  }
  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state);
}

/**
 * Custom hook for persisting navigation state.
 */
export function useNavigationPersistence(storage: any, persistenceKey: string) {
  const [initialNavigationState, setInitialNavigationState] = useState();
  const [isRestoringNavigationState, setIsRestoringNavigationState] = useState(
    __DEV__,
  );
  const routeNameRef = useRef();
  const onNavigationStateChange = (state: any) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);
    if (previousRouteName !== currentRouteName) {
      // track screens.
      __DEV__ && console.log(currentRouteName);
    }
    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName;
    // Persist state to storage
    storage.save(persistenceKey, state);
  };

  const restoreState = useCallback(async () => {
    try {
      const state = await storage.load(persistenceKey);
      if (state) {
        setInitialNavigationState(state);
      }
    } finally {
      setIsRestoringNavigationState(false);
    }
  }, [persistenceKey, storage]);

  useEffect(() => {
    if (isRestoringNavigationState) {
      restoreState();
    }
  }, [isRestoringNavigationState, restoreState]);

  return {
    onNavigationStateChange,
    restoreState,
    initialNavigationState,
    RootNavigation,
  };
}
