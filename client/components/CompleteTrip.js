import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input'

export default class CompleteTrip extends Component {
    //props.navigation.getParam(paramName, defaultValue) --> getting values from "select route" page
    state = { noOfPassengers: 1 }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Complete Trip</Text>
                <Text>No of passengers: </Text>
                <NumericInput
                    value={this.state.noOfPassengers}
                    minValue='1'
                    maxValue='50'
                    onChange={value => this.setState({ noOfPassengers: value })}
                />
                <Button
                    title="Go to ScanQR"
                    onPress={() => this.props.navigation.navigate('')} //go to generate qr
                />
                <Button
                    title="Back"
                    onPress={() => this.props.navigation.navigate('')} //go back to select route
                />
            </View>
        )
    }
}
