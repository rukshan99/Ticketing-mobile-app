import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { TripStackNavigator, ScanQRStackNavigator, UserAccStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Book Trip" component={TripStackNavigator} />
      <Drawer.Screen name="Scan QR" component={ScanQRStackNavigator} />
      <Drawer.Screen name="User Account" component={UserAccStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;