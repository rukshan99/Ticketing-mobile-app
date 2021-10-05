import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import axios from 'axios';



export default class AddBusDetails extends Component {

    constructor() {
        super();
        this.state = {
            busID: '',
            date: '',
            time: '',
            route: '',
            BusNo: ''
        }
    }

    submit() {
        const id = this.props.route.params.id;
        axios.put(`http://localhost:4000/api/v1/buses/edit/${id}`, this.state)
            .then(response => {
               
            })
            .catch(error => {
                console.log(error.message);
                alert('Data cannot be empty..! ' + error.message)
            })
        console.warn(this.state);
        this.props.navigation.navigate('Notify')
    }

    componentDidMount = async () =>{
        const id = this.props.route.params.id;
        try {
			const res = await axios.get(`http://localhost:4000/api/v1/buses/edit/${id}`);
            const buses = res.data.data;
            console.log(buses)
			this.setState({
				busID: buses.busID,
				date: buses.date,
				time: buses.time,
				route:buses.route,
                BusNo:buses.BusNo
			});
			// this.setState({ loading: false, name: res.data.class.name });
		} catch (error) {

			alert(error.response.data.error);
		}
        
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Enter Bus ID"
                    onChangeText={(text) => { this.setState({ busID: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                    value={this.state.busID}
                />
                <TextInput
                    placeholder="Enter Date"
                    onChangeText={(text) => { this.setState({ date: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                    value={this.state.date}
                />
                <TextInput
                    placeholder="Enter Time"
                    onChangeText={(text) => { this.setState({ time: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                    value={this.state.time}
                />
                <TextInput
                    placeholder="Enter Route"
                    onChangeText={(text) => { this.setState({ route: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                    value={this.state.route}
                />
                <TextInput
                    placeholder="Enter Bus No"
                    onChangeText={(text) => { this.setState({ BusNo: text }) }}
                    style={{ borderWidth: 1, borderColor: 'black', margin: 20, height: '50px' }}
                    value={this.state.BusNo}
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