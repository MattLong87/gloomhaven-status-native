import React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

export default class Arrow extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress} hitSlop={{left: 150, right: 150, top: 50, bottom: 50}}>
                <View>
                    <Image source={require('../img/arrow.png')} style={[arrowStyles.arrow, (this.props.direction == "down") ? arrowStyles.down : null]} />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const arrowStyles = StyleSheet.create({
    arrow:{
        width: 50, 
        height: 17, 
        resizeMode: "stretch"
    },

    down:{
        transform: [{rotateX: "180deg"}]
    }
})