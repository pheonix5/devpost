import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Pages/Home';
import Search from "../Pages/Search";
import Profile from "../Pages/Profile";

const Tab = createBottomTabNavigator();

export default function AppRoutes(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFF"
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}