import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import Tracker from './components/Tracker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", () => this.forceUpdate());
  }

  state = { summonVisible: false }

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

    let summonTracker = null;
    if (this.state.summonVisible){
      summonTracker = <Tracker type="Summon" />
    }

    return (
      <View style={{ flex: 1 }}>

        <View style={[styles.container, flexDirection]}>
          {summonTracker}
          <Tracker type="Health" />
          <Tracker type="XP" />
              <TouchableHighlight onPress={() => this.setState({ summonVisible: !this.state.summonVisible })} 
                style={
                  {backgroundColor: "yellow",
                  position: "absolute", 
                  bottom: 10,
                  right: 10
                  }} >
                  <View><Text>Toggle Summon</Text></View>
                </TouchableHighlight>
        </View>
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