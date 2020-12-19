import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {typography} from '../../theme';
import {useDispatch} from 'react-redux';
import {signOutRequest} from '../../redux/slices';

export function Dashboard() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          dispatch(signOutRequest());
        }}>
        Dashboard
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontFamily: typography.italic},
});
