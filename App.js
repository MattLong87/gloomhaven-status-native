import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tracker from './components/Tracker';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Tracker type="Health" />
      <Tracker type="XP" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center'
  }
})