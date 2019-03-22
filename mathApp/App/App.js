import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Intro from '@screens/Intro';
import _ from 'lodash';
import importedStyles from './styles';
import ActivityNavigator from '@screens/ActivityNavigator';
import LoginNavigator from '@screens/LoginNavigator';
import * as firebase from 'firebase';

let config = {
    apiKey: 'AIzaSyBuXN3wVcd0aHq0BOH1OvVnWb3vlymRUSw',
    authDomain: 'learning-app-test-7d8f5.firebaseapp.com',
    databaseURL: 'https://learning-app-test-7d8f5.firebaseio.com',
    projectId: 'learning-app-test-7d8f5',
    storageBucket: "learning-app-test-7d8f5.appspot.com",
    messengingSenderId: '420727041439'
};

let app = firebase.initializeApp(config);

export const dbAuth = app.auth();
export const db = app.database();



const styles = _.cloneDeep(importedStyles);

const AppNavigator = createStackNavigator(
    {
        Intro: Intro,
        ActivityNavigator: ActivityNavigator,
        LoginNavigator: LoginNavigator
    },
    {
        initialRouteName: 'Intro'
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}
