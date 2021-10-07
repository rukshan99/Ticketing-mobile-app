import React, { Component } from 'react';
import { Button, View, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default class AddBusDetails extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            busID: '',
            date: '',
            time: '',
            route: '',
            BusNo: '',
            Stations: ''
        }
    }

    submit() {
        this.setState({ isLoading: true });
        axios.post('http://localhost:4000/api/v1/buses/', this.state)
            .then(response => {
             this.setState({ isLoading: false });
            })
            .catch(error => {
                console.log(error.message);
                alert('Data cannot be empty..! ' + error.message)
            })

        console.warn(this.state);
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Enter Bus ID"
                    onChangeText={(text) => { this.setState({ busID: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: 50 }}
                />
                <TextInput
                    placeholder="Enter Date"
                    onChangeText={(text) => { this.setState({ date: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: 50}}
                />
                <TextInput
                    placeholder="Enter Time"
                    onChangeText={(text) => { this.setState({ time: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: 50 }}
                />
                <TextInput
                    placeholder="Enter Route"
                    onChangeText={(text) => { this.setState({ route: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: 50 }}
                />
                <TextInput
                    placeholder="Enter Bus No"
                    onChangeText={(text) => { this.setState({ BusNo: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: 50 }}
                />
                <TextInput
                    placeholder="Enter Stations as a comma separated list"
                    onChangeText={(text) => { this.setState({ Stations: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: 50 }}
                />

                <View style={{ width: 100, left: 150 }}>
                    <Button title="Save"
                        onPress={() => this.submit()}
                    />
                </View>
                {this.state.isLoading && (
                            <ActivityIndicator size="large" />
                          )}

            </View>
        )
    }
}

