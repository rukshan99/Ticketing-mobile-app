import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChooseLocation from './components/ChooseLocation';
import CompleteTrip from './components/CompleteTrip';
import GenerateQR from './components/GenerateQR';
import ScanQR from './components/ScanQR';
import Registration from "./components/UserRegistration";
import UserDetails from "./components/UserDetails";
import AddBusDetails from "./components/AddBusDetails";
import UserAccount from './components/UserAccount';
import SingleTrip from './components/SingleTrip';
// import NotifyPage from './components/NotifyPage';

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
const UserDetailsNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="User Details" component={UserDetails} />
    </Stack.Navigator>
  );
}

const UserAccStackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="UserAccount" component={UserAccount} />
      <Stack.Screen name="SingleTrip" component={SingleTrip} />
    </Stack.Navigator>
  );
}

const BusDetailsNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="Add a Bus" component={AddBusDetails} />
    </Stack.Navigator>
  );
}

export { TripStackNavigator, ScanQRStackNavigator, UserAccStackNavigator, UserDetailsNavigator, BusDetailsNavigator, UserRegistrationStackNavigator };
