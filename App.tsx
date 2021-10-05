import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import AppNavigation from "./src/screens";
import {Colors} from "./src/share";


const configs = {
    colors: Colors
}

const theme = extendTheme(configs);

const App = () => {
    return (
        <NativeBaseProvider theme={theme}>
            <AppNavigation/>
        </NativeBaseProvider>
    );
};

export default App;
