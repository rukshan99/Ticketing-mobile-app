import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import axios from 'axios';

export default class SingleTrip extends Component {
  state = {
    trip: {}
  };

  componentDidMount = async () => {
    const id = this.props.navigation.getParam(tripId, '')
    try {
      const trip = await axios.get(`http://localhost:4000/api/v1/trips/${id}`);
      this.setState({ trip });
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          Bus No:{ this.state.trip.busNo + '\n' }
          Ticket ID:{ this.state.trip.ticketId + '\n' }
          Source:{ this.state.trip.source + '\n' }
          Destination:{ this.state.trip.destination + '\n' }
          No of Passengers:{ this.state.trip.noOfPassengers + '\n' }
          Fare:{ this.state.trip.fare + '\n' }
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});