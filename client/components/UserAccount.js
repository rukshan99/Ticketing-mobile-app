import React, { Component } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const renderItem = ({ item }) => {
  const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  const color = item.id === selectedId ? 'white' : 'black';

  return (
    <Item
      item={item}
      onPress={() => this.props.navigation.navigate('SingleTrip', { tripId: item.id })}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
  );
};

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

  componentDidMount() {
    const userid = getLoggedInUserData();
    //get user obj by id
    //get ticket list
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          username{'\n'}
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
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