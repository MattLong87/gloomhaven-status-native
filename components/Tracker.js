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
        if (this.state.value > 0) {
            let newState = { value: this.state.value - 1 };
            this.setState(newState);
        }
        else{
            this.setState(this.state);
        }
    }


    render() {
        return (
            <View style={[
                trackerStyles.tracker, 
                trackerStyles[this.props.type.toLowerCase()], 
                this.props.orientation == "portrait" ? trackerStyles.horizontal : trackerStyles.vertical
                ]}>
                <Arrow onPress={() => this.increment()} direction="up" orientation={this.props.orientation} />
                <Text style={trackerStyles.value}>{this.state.value}</Text>
                <Arrow onPress={() => this.decrement()} direction="down" orientation={this.props.orientation} />
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

    horizontal: {
        flexDirection: "row-reverse"
    },

    vertical: {
        flexDirection: "column"
    },

    //styles for this.props.type
    health: {
        backgroundColor: "#D91E18"
    },
    xp: {
        backgroundColor: "#4183D7"
    },
    summon: {
        backgroundColor: "#4DAF7C"
    },

    //styles for subcomponents
    value: {
        color: "#fff",
        fontSize: 140,
        marginVertical: 10,
        marginHorizontal: 20
    }
});