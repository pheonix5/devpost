import React from "react";
import { View, ActivityIndicator } from 'react-native'

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes(){
  const signed = true;
  const loading = false;

  return(
    signed ? <AppRoutes/> : <AuthRoutes/>
  )
}

export default Routes;