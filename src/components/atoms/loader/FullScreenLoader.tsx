import React, {useState} from "react";
import {Text, View, StyleSheet, ActivityIndicator} from "react-native";
import {Box} from 'native-base'
import {Colors} from "../../../share";

const FullScreenLoader = () => {

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator size="small" color={Colors.primary["500"]}/>
    </Box>
  )
}

export default FullScreenLoader
