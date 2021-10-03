import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChooseLocation from './components/ChooseLocation';
import CompleteTrip from './components/CompleteTrip';
import GenerateQR from './components/GenerateQR';
import ScanQR from './components/ScanQR';
import Registration from "./components/UserRegistration";
import CreditCard from "./components/CreditCardForm";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const TripStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
      <Stack.Screen name="CompleteTrip" component={CompleteTrip} />
      <Stack.Screen name="GenerateQR" component={GenerateQR} />
    </Stack.Navigator>
  );
}

const ScanQRStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="ScanQR" component={ScanQR} />
    </Stack.Navigator>
  );
}

const UserRegistrationStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}

const CreditCardStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="CreditCard" component={CreditCard} />
    </Stack.Navigator>
  );
}


export { TripStackNavigator, ScanQRStackNavigator, UserRegistrationStackNavigator, CreditCardStackNavigator };