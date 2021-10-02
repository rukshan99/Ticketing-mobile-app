import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default class UserDetails extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>User Details</Text>

          <View style={styles.details}>
            <Text>Pesssenger ID</Text>
            <Text>Ticket ID</Text>
            <Text>Source</Text>
            <Text>Destination</Text>
            <Text>No of Passengers</Text>
            <Text>Fare</Text>
          </View>
          <View style={styles.saveBTN}>
            <Button title="Save"
                      // onPress={() => this.props.navigation.navigate('')} //go to generate qr
                  />
          </View>
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({

    text: {
		position: 'absolute',
        width: '218px',
        height: '35px',
        left: '96px',
        top: '25px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '42px',
        textAlign: 'center',

        color: '#000000'
    },
    saveBTN: {
        position: 'absolute',
        width: '160px',
        height: '41px',
        top: '480px',
    },

  });