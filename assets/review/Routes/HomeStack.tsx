import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            // headerStyle: { backgroundColor: '#bbb' }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: { backgroundColor: '#bbb' }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#bbb', height:200 }
    }
});

export default createAppContainer(HomeStack);