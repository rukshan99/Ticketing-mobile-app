import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

export default class SingleTrip extends Component {
  state = {
    busNo: '',
    ticketId: '',
    source: '',
    destination: '',
    noOfPassengers: 0,
    fare: 0
  };

  componentDidMount() {
    const tripId = this.props.navigation.getParam(tripId, '')
    //get trip obj by id
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          Bus No:{ this.state.busNo + '\n' }
          Ticket ID:{ this.state.ticketId + '\n' }
          Source:{ this.state.source + '\n' }
          Destination:{ this.state.destination + '\n' }
          No of Passengers:{ this.state.noOfPassengers + '\n' }
          Fare:{ this.state.fare + '\n' }
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