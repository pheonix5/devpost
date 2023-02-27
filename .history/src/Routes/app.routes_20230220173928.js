import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Feather from 'react-native-vector-icons/Feather'

import Home from '../Pages/Home';
import Search from "../Pages/Search";
import Profile from "../Pages/Profile";
import NewPost from "../Pages/NewPost";
import PostsUser from "../Pages/PostsUser";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={Home}
      />

      <Stack.Screen 
        name="NewPost"
        component={NewPost}
        options={{
          title: "Novo Post",
          headerTintColor: "#fff",
          headerStyle:{
            backgroundColor: '#36393f'
          }
        }}
      />

      <Stack.Screen 
        name="PostsUser"
        component={PostsUser}
        options={{
          headerTintColor: '#FFF',
          headerStyle:{
            backgroundColor: "#36393f"
          }
        }}
      />
    </Stack.Navigator>
  )
}

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


      <Tab.Screen 
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="search" color={color} size={size} />
          }
        }}
       />

      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="user" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}