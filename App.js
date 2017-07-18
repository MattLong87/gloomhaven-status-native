import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal, TouchableHighlight } from 'react-native';
import Tracker from './components/Tracker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", () => this.forceUpdate());
  }

  state = { modalVisible: false }

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
      <View style={{ flex: 1 }}>
        <Modal
          animationType={"slide"}
          visible={this.state.modalVisible}
          supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        >
          <Text>This is the modal</Text>
        </Modal>
        <View style={[styles.container, flexDirection]}>
          <Tracker type="Health" />
          <Tracker type="XP" />
              <TouchableHighlight onPress={() => this.setState({ modalVisible: true })} 
                style={
                  {backgroundColor: "yellow",
                  position: "absolute", 
                  bottom: 10,
                  right: 10
                  }} >
                  <View><Text>Info</Text></View>
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