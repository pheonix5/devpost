import React from "react";
import { View, ActivityIndicator } from 'react-native'

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes(){
  const signed = true;
  const loading = false;

  return(
    signed ? <AppRoutes/> : <AuthRoutes/>
  )
}