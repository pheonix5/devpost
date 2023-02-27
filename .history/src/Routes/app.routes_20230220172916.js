import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'

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
        tabBarActiveTintColor: "#FFF",

        tabBarStyle:{
          backgroundColor: '#202225',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" color={color} size={size} />
          }
        }}
      />


      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}