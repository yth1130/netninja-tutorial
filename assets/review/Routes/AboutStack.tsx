import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'

import About from '../screens/About'
import Header from '../shared/Header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }: any) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
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