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
import SelectRoute from './components/SelectRoute';
import TimeTable from './components/Timetable';
import editBus from './components/EditBusDetails';
import busDetails from './components/BusDetails';
import notify from './components/Notify';
import BusDetailsForRoute from './components/BusDetailsForRoute';

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
      <Stack.Screen name="SelectRoute" component={SelectRoute} />
      <Stack.Screen name="BusDetailsForRoute" component={BusDetailsForRoute} />
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

const TimetableNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="Time Table" component={TimeTable} />
      <Stack.Screen name="Edit Bus" component={editBus} />
      <Stack.Screen name="Notify" component={notify} />
    </Stack.Navigator>
  );
}

const bDetailsNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={screenOptionStyle}>
      <Stack.Screen name="Bus Details" component={busDetails} />
    </Stack.Navigator>
  );
}

export { TripStackNavigator, 
  ScanQRStackNavigator, 
  UserAccStackNavigator, 
  UserDetailsNavigator, 
  BusDetailsNavigator, 
  UserRegistrationStackNavigator,
  TimetableNavigator,
  bDetailsNavigator
};
