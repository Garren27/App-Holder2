import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Intro from '@screens/Intro';
import _ from 'lodash';
import importedStyles from './styles';
import ActivityNavigator from '@screens/ActivityNavigator';

const styles = _.cloneDeep(importedStyles);


const AppNavigator = createStackNavigator(
    {
        Intro: Intro,
        ActivityNavigator: ActivityNavigator
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
