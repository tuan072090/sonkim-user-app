import messaging from '@react-native-firebase/messaging';

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import React from 'react';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background..............!', remoteMessage);
});

//  only for iOS
function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }

    return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
