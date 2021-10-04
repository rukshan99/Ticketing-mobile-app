import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './DrawerNavigation';


export default function App() {


  return (
          <NavigationContainer>
          <DrawerNavigator  />
        </NavigationContainer>
        
  );

}

