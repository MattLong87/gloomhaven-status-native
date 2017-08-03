import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, Animated } from 'react-native';
import Tracker from './components/Tracker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", () => this.forceUpdate());
  }

  state = {
    summonFlex: new Animated.Value(.0001),
    summonVisible: false
  }

  toggleSummonTracker() {
    if (!this.state.summonVisible) {
      this.setState({
        //summonFlex: 1,
        summonVisible: !this.state.summonVisible
      });
      Animated.timing(
        this.state.summonFlex,
        {
          toValue: 1,
          duration: 300
        }
      ).start()
    }
    else {
      this.setState({
        //summonFlex: .0001,
        summonVisible: !this.state.summonVisible
      })
      Animated.timing(
        this.state.summonFlex,
        {
          toValue: .0001,
          duration: 300
        }
      ).start()
    }
  }

  render() {
    let flexDirection;
    let { height, width } = Dimensions.get('window');
    let orientation;
    if (height > width) {
      //portrait layout
      flexDirection = { flexDirection: "column" }
      orientation = "portrait"
    }
    else {
      flexDirection = { flexDirection: "row" }
      orientation = "landscape"
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.container, flexDirection]}>
          <Tracker type="Summon" orientation={orientation} flex={this.state.summonFlex} />
          <Tracker type="Health" orientation={orientation} />
          <Tracker type="XP" orientation={orientation} />
          <TouchableHighlight onPress={() => this.toggleSummonTracker()} underlayColor="#ccc"
            style={
              {
                borderColor: "white",
                borderWidth: 2,
                borderRadius: 5,
                height: 35,
                width: 35,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: 10,
                right: 10
              }} >
              <Text style={{
                fontSize: 24,
                color: "white"
              }}>
                {this.state.summonVisible ? "-" : "+"}
              </Text>
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