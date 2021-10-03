import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { TripStackNavigator, ScanQRStackNavigator, UserRegistrationStackNavigator, CreditCardStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Book Trip" component={TripStackNavigator} />
      <Drawer.Screen name="Scan QR" component={ScanQRStackNavigator} />
      <Drawer.Screen name="Sign Up" component={UserRegistrationStackNavigator} />
      <Drawer.Screen name="Credit Card" component={CreditCardStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;