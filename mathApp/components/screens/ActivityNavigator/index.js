import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Activity1 from '@screens/Activity1';
import Activity2 from '@screens/Activity2';
import Activity3 from '@screens/Activity3';
import Activity4 from '@screens/Activity4';
import Activity5 from '@screens/Activity5';
import Activity6 from '@screens/Activity6';
import Activity7 from '@screens/Activity7';
import Activity8 from '@screens/Activity8';
import ActivitySelector from '@screens/ActivitySelector';

const ActivityNavigatorStack = createStackNavigator(
    {
        ActivitySelector,
        Activity1,
        Activity2,
        Activity3,
        Activity4,
        Activity5,
        Activity6,
        Activity7,
        Activity8
    },
    {
        headerMode: 'none',
        initialRouteName: 'ActivitySelector'
    }
);

const ActivityNavigatorContainer = createAppContainer(ActivityNavigatorStack);

export default class ActivityNavigator extends Component {
    render() {
        return(
            <ActivityNavigatorContainer/>
        )
    }
}
