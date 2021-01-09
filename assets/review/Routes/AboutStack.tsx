import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'

import About from '../screens/About'
import Header from '../shared/Header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }: any) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
                headerBackground: () => <Image source={require('../images/game_bg.png')} style={{height:'100%'}}/>,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#bbb', height:200 }
    }
});

export default AboutStack