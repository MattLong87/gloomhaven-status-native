import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Tracker from './components/Tracker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", () => this.forceUpdate());
  }
  
  render() {
    let flexDirection;
    let { height, width } = Dimensions.get('window');
    if (height > width) {
      //portrait layout
      flexDirection = { flexDirection: "column" }
    }
    else {
      flexDirection = { flexDirection: "row" }
    }

    return (
      <View style={[styles.container, flexDirection]}>
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