import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';


export default class UserDetails extends React.Component {

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
      passengerID: this.props.route.params.passengerID,
      ticketID: this.props.route.params.ticketID,
      source: this.props.route.params.source,
      destination: this.props.route.params.destination,
      noOfPassengers: this.props.route.params.noOfPassengers,
      fare: this.props.route.params.fare

    })
  }

  submit() {
    axios.post('http://localhost:4000/api/v1/tripLogs/', this.state)
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
            value={this.state.passengerID}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>Ticket ID</Text>
          <TextInput
            value={this.state.ticketID}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>Source</Text>
          <TextInput
            value={this.state.source}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>Destination</Text>
          <TextInput
            value={this.state.destination}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>No of Passengers</Text>
          <TextInput
            value={this.state.noOfPassengers}
            style={{ borderWidth: 1, borderColor: 'black', margin: 5, height: 30 }}
          />
          <Text>Fare</Text>
          <TextInput
            value={this.state.fare}
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
    fontFamily: 'Roboto',
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