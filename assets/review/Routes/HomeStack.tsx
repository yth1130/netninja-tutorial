import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }: any) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone'/>,
                headerBackground: () => <Image source={require('../images/game_bg.png')} style={{height:'100%'}}/>,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: { backgroundColor: '#999', height:200 },
    }
});

export default HomeStack;