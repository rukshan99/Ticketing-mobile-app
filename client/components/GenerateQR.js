import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';

export default class CompleteTrip extends Component {
  //props.navigation.getParam(paramName, defaultValue) --> getting values from "complete trip" page
  state = { route: { street: 'colombo road', city: 'gampaha' }, noOfPassengers: 1 }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Source:{'\n'}
          Destination:{'\n'}
          No of passengers:{'\n'}
          Fare:{'\n'}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title="Cancel"
            color="#ed665c"
            onPress={() => this.props.navigation.navigate('')}
          />
          <View style={{ width: 20 }}></View>
          <Button
            title="Confirm"
            onPress={() => this.props.navigation.navigate('')} //add a function calling axios post to save all the details...include a boolean attribute to marks as paid or not
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <SvgQR data={this.state} />
        </View>
      </View>
    );
  }
}

function SvgQR(props) {
  return <SvgQRCode value='make the state object as a string by merging them with a special symbol 
    inbetween and then use split when scanning the qr' />;
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
