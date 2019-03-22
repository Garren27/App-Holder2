import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginSelector from '@screens/LoginSelector';

const LoginNavigatorStack = createStackNavigator(
    {
        LoginSelector
    },
    {
        headerMode: 'none',
        initialRouteName: 'LoginSelector'
    }
);

const LoginNavigatorContainer = createAppContainer(LoginNavigatorStack);

export default class LoginNavigator extends Component {
    render() {
        return(
            <LoginNavigatorContainer/>
        );
    }
}
