import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


export default class ChooseLocation extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Choose Location</Text>
                <Button
                    title="Go to CompleteTrip"
                    onPress={() => this.props.navigation.navigate('CompleteTrip')}
                />
            </View>
        )
    }
}