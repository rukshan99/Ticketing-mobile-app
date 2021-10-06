import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input'

export default class CompleteTrip extends Component {
    state = {
        noOfPassengers: 1,
        trip: this.props.route.params
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <br/>
                <Text>Complete Trip</Text>
                <br/>
                <Text>No of passengers: </Text>
                <br/>
                <NumericInput
                    value={this.state.noOfPassengers}
                    minValue={1}
                    maxValue={50}
                    onChange={value => this.setState({ noOfPassengers: value })}
                />
                <br/>
                <View style={styles.row}>
                <View style={{right: 23 ,width: 120}}>
                <Button
                    title="Go to ScanQR"
                    onPress={() => this.props.navigation.navigate('GenerateQR', {
                        ...this.state.trip,
                        noOfPassengers: this.state.noOfPassengers
                    })}
                />
                </View> 
                <View style={{left: 23 ,width: 120}}>
                <Button
                    title="Back"
                    color="#ed665c"
                    onPress={() => this.props.navigation.navigate('')}
                />
                </View>   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 36,
        margin: 15

      },
})
