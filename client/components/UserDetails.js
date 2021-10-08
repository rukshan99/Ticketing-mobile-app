import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import axios from 'axios';


export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passengerID: '',
      ticketID: '',
      source: '',
      destination: '',
      noOfPassengers: '',
      fare: ''
    }
  }

  componentDidMount() {
    this.setState({
      passengerID: this.props.route.params.data.passengerId,
      ticketID: this.props.route.params.data.ticketId,
      source: this.props.route.params.data.source,
      destination: this.props.route.params.data.destination,
      noOfPassengers: this.props.route.params.data.noOfPassengers,
      fare: this.props.route.params.data.fare
    })
  }

  submit() {
    axios.post('https://ticketing-mobileapp-service.herokuapp.com/api/v1/tripLogs/', this.state)
      .then(response => {
        alert('User Details successfully inserted')
      })
      .catch(error => {
        console.log(error.message);
        alert('Data cannot be empty..! ' + error.message)
      })
    console.warn(this.state);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>User Details</Text>

        <View style={styles.details}>
          <Text>Pesssenger ID </Text>
          <TextInput
            defaultValue={' ' + this.state.passengerID}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>Ticket ID</Text>
          <TextInput
            defaultValue={' ' + this.state.ticketID}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>Source</Text>
          <TextInput
            defaultValue={' ' + this.state.source}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>Destination</Text>
          <TextInput
            defaultValue={' ' + this.state.destination}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>No of Passengers</Text>
          <TextInput
            defaultValue={' ' + this.state.noOfPassengers}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>Fare</Text>
          <TextInput
            defaultValue={' RS: ' + this.state.fare}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
        </View>
        <View style={styles.saveBTN}>
          <Button title="Save"
            onPress={() => this.submit()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  text: {
    position: 'absolute',
    width: 218,
    height: 35,
    left: 96,
    top: 25,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 42,
    textAlign: 'center',

    color: '#000000'
  },
  saveBTN: {
    position: 'absolute',
    width: 160,
    height: 41,
    top: 480,
  },

  details: {
    bottom: 45,
    width: 250
  }

});