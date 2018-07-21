import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';

const HomeStackNavigator = createStackNavigator(
    {

        Home: {
            screen: HomeScreen,
        },

        Other: {
            screen: OtherScreen,
        },

    },

    //GLOBAL CONFIG FOR ALL SCREENS
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#FFF'
            },
        }
    },
);
export default HomeStackNavigator;
