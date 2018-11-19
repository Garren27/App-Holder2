import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Activity1 from '@screens/Activity1';
import Activity2 from '@screens/Activity2';
import Activity3 from '@screens/Activity3';

const ActivityNavigator2 = createStackNavigator(
    {
        Activity1: Activity1,
        Activity2: Activity2,
        Activity3: Activity3
    },
    {
        headerMode: 'none',
        initialRouteName: 'Activity1'
    }
);

const ActivityNavigator3 = createAppContainer(ActivityNavigator2);

export default class ActivityNavigator extends Component {
    render() {
        return(
            <ActivityNavigator3/>
        )
    }
}
