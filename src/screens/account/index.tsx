import React from "react";
import {StyleSheet, Text, View} from "react-native";
import AccountHeader from "./components/AccountHeader";

const AccountScreen = () => {

    return (
        <View style={styles.wrap}>
            <AccountHeader></AccountHeader>
            <Text>Account Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {}
})

export default AccountScreen
