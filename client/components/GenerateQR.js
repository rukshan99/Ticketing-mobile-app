import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import axios from 'axios';

export default class CompleteTrip extends Component {
  state = {
    isLoading: false,
    isPaid: false,
    source: '',
    destination: '',
    noOfPassengers: 0,
    fare: 0,
    stations: [],
    route: '',
    bus: {},
    data: ''
  }

  componentDidMount = () => {
    this.setState({
      source: this.props.route.params.source,
      destination: this.props.route.params.destination,
      noOfPassengers: this.props.route.params.noOfPassengers,
      stations: this.props.route.params.Stations,
      route: this.props.route.params.route,
      bus: {
        ...this.state.bus,
        busId: this.props.route.params.busId,
        BusNo: this.props.route.params.BusNo
      }
    }, () => {
      this.calculateFare();
    });
  }

  confirmHandler = () => {
    this.setState({ isLoading: true });
    const data = {
      source: this.state.source,
      destination: this.state.destination,
      route: this.state.route,
      bus: this.state.bus,
      noOfPassengers: this.state.noOfPassengers,
      fare: this.state.fare,
      passengerId: '615cbbb61d98356817c4d686'
    }
    axios.post('http://localhost:4000/api/v1/trips/', data).then((res) => {
      this.setState({ isLoading: false });
      this.setState({ isPaid: true });
      console.log(this.state.data);
    }).catch((error) => {
      console.error(error);
    });
  }

  calculateFare = () => {
    const _commonFareForOneStation = 10; // --> an assumption
    const noOfStationsInBetween = Math.abs(this.state.stations.findIndex((station) => station === this.state.source) -
      this.state.stations.findIndex((station) => station === this.state.destination));
    this.setState({ fare: noOfStationsInBetween * _commonFareForOneStation * this.state.noOfPassengers },
      () => { this.generateQRCodeData() }
      );
  }

  generateQRCodeData = () => {
    this.setState({
      data: JSON.stringify({
        passengerId: '615cbbb61d98356817c4d686',
        ticketId: 'T1108',
        source: this.state.source,
        destination: this.state.destination,
        noOfPassengers: this.state.noOfPassengers,
        fare: this.state.fare
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Source:{' ' + this.state.source + '\n'}
          Destination:{' ' + this.state.destination + '\n'}
          No of passengers:{' ' + this.state.noOfPassengers + '\n'}
          Fare:{' RS: ' + this.state.fare + '/=\n'}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title="Cancel"
            color="#ed665c"
            onPress={() => this.props.navigation.navigate('')}
          />
          <View style={{ width: 20 }}></View>
          <Button
            title="Pay"
            onPress={this.confirmHandler}
            disabled={this.state.isPaid}
          />
        </View>
        {this.state.isLoading && (
          <ActivityIndicator size="large" />
        )}
        {this.state.isPaid && (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <SvgQR data={this.state.data} />
          </View>
        )}
      </View>
    );
  }
}

function SvgQR(props) {
  return <SvgQRCode value={props.data} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});
