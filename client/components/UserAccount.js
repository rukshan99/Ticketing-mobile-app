import React, { Component } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const getLoggedInUserData = async () => {
  try {
    const userid = await AsyncStorage.getItem('userid') //using this to get the user id which is set in successful login
    if(userid !== null) {
      //redirect to login page
    }
    return userid;
  } catch(e) {
    console.error(e);
  }
}

export default class UserAccount extends Component {
  state = {
    loggedInUser: {},
    ticketsList: [],
    selectedTicketId: ''
  };

  componentDidMount = async () => {
    const userid = getLoggedInUserData();
    try {
      const res = await axios.get('http://localhost:4000/api/v1/trips');
      console.log(res.data);
      //this.setState({ticketsList: res.data});
    } catch(error) {
      console.error(error);
    }

    //get user obj by id
  }

  renderItem = ({ item }) => {
    const backgroundColor = item._id === this.state.selectedTicketId ? "#6e3b6e" : "#f9c2ff";
    const color = item._id === this.state.selectedTicketId ? 'white' : 'black';
  
    return (
      <Item
        item={item}
        onPress={() => this.props.navigation.navigate('SingleTrip', { tripId: item._id })}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.ticketsList}
          renderItem={this.renderItem}
          keyExtractor={(item) => item._id}
          extraData={this.state.selectedTicketId}
        />
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