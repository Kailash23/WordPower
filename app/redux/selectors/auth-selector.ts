import {createSelector} from 'reselect';

export const getAuthState = createSelector([state => state.auth], auth => auth);
