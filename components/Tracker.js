import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Arrow from './Arrow';

export default class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.type === "Health" ? 15 : 0 }
    }

    increment() {
        let newState = { value: this.state.value + 1 };
        this.setState(newState);
    }

    decrement() {
        let newState = { value: this.state.value - 1 };
        this.setState(newState);
    }


    render() {
        return (
            <View style={[trackerStyles.tracker, trackerStyles[this.props.type.toLowerCase()]]}>
                <Arrow onPress={() => this.increment()} direction="up" />
                <Text style={trackerStyles.value}>{this.state.value}</Text>
                <Arrow onPress={() => this.decrement()} direction="down" />
            </View>
        )
    }
}

const trackerStyles = StyleSheet.create({
    //styles for all trackers
    tracker: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },

    //styles for this.props.type
    health: {
        backgroundColor: "#d42503"
    },
    xp: {
        backgroundColor: "#2e74de"
    },

    //styles for subcomponents
    value: {
        color: "#fff",
        fontSize: 140,
        marginVertical: 10
    }
});