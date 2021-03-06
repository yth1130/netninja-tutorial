import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './assets/review/screens/Home';
import AppLoading from 'expo-app-loading';
import Navigator from './assets/review/Routes/Drawer';

const getFonts = async () => await Font.loadAsync({
    'nunito-regular': require('./assets/review/fonts/Nunito/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/review/fonts/Nunito/Nunito-Bold.ttf'),
});

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    // const [fontsLoaded] = Font.useFonts({
    //     'nunito-regular': require('./assets/review/fonts/Nunito/Nunito-Regular.ttf'),
    //     'nunito-bold': require('./assets/review/fonts/Nunito/Nunito-Bold.ttf'),
    // });
    console.log("A");
    if (!fontsLoaded) {
        console.log("B");
        return (
            <AppLoading 
                startAsync={getFonts}
                onFinish={()=>setFontsLoaded(true)}
                onError={(error)=>{}}
            />
        )
    }
    else {
        console.log("C");
        return (
            <Navigator />
        )
    }
}