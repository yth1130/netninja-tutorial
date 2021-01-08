import { createStackNavigator } from 'react-navigation-stack'

import About from '../screens/About'

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
            // headerStyle: { backgroundColor: '#bbb' }
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