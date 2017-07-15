import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default class Arrow extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View>
                    <Image source={require('../img/arrow.png')} style={{width: 50, height: 50}} />
                    <Text>arrow</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}