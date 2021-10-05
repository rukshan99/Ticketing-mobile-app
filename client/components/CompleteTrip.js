import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input'

export default class CompleteTrip extends Component {
    state = {
        noOfPassengers: 1,
        trip: this.props.route.params
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Complete Trip</Text>
                <Text>No of passengers: </Text>
                <NumericInput
                    value={this.state.noOfPassengers}
                    minValue={1}
                    maxValue={50}
                    onChange={value => this.setState({ noOfPassengers: value })}
                />
                <Button
                    title="Go to ScanQR"
                    onPress={() => this.props.navigation.navigate('GenerateQR', {
                        ...this.state.trip,
                        noOfPassengers: this.state.noOfPassengers
                    })}
                />
                <Button
                    title="Back"
                    color="#ed665c"
                    onPress={() => this.props.navigation.navigate('')}
                />
            </View>
        )
    }
}
