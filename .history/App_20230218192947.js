import React from "react";
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from "./src/Routes";

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#36393f" barStyle="light-content" translucent={false}/>
      <Routes/>
    </NavigationContainer>
  )
}
