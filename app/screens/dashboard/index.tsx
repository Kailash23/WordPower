import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {typography} from '../../theme';

export function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontFamily: typography.italic},
});
