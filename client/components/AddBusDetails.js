import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

export default class AddBusDetails extends Component {

    constructor() {
        super();
        this.state = {
            busID: '',
            date: '',
            time: '',
            route: '',
            BusNo: '',
            Stations: ''
        }
    }

    submit() {
        // axios.post('', this.state)
        //     .then(response => {
        //         alert('Bus successfully inserted')
        //     })
        //     .catch(error => {
        //         console.log(error.message);
        //         alert('Data cannot be empty..! ' + error.message)
        //     })
        console.warn(this.state);
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Enter Bus ID"
                    onChangeText={(text) => { this.setState({ BusID: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                />
                <TextInput
                    placeholder="Enter Date"
                    onChangeText={(text) => { this.setState({ date: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                />
                <TextInput
                    placeholder="Enter Time"
                    onChangeText={(text) => { this.setState({ time: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                />
                <TextInput
                    placeholder="Enter Route"
                    onChangeText={(text) => { this.setState({ route: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                />
                <TextInput
                    placeholder="Enter Bus No"
                    onChangeText={(text) => { this.setState({ BusID: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                />
                <TextInput
                    placeholder="Enter Stations as a comma separated list"
                    onChangeText={(text) => { this.setState({ Stations: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                />

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title="Save"
                        onPress={() => this.submit()}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    saveBTN: {
        position: 'absolute',
        width: '160px',
        height: '41px',
        top: '500px',
    }

});