import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../../redux/slices';
import {typography} from '../../theme';

export function SignIn() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          dispatch(loginRequest());
        }}>
        Sign In
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontFamily: typography.italic},
});
