import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer'; 

import ChooseLocation from './components/ChooseLocation';
import ScanQR from './components/ScanQR';

export default function App() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createDrawerNavigator({
  ChooseLocation: {
    screen: ChooseLocation
  },
  ScanQR: {
    screen: ScanQR
  }
},{
  initialRouteName: "ChooseLocation"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});