import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import _ from 'lodash';
import importedStyles from './styles';
import Intro from './Intro';
import VeryEasy from './VeryEasy';
import Easy from './Easy';
import Hard from './Hard';
import VeryHard from './VeryHard';

const styles = _.cloneDeep(importedStyles);

const Activity1Navigator = createStackNavigator(
    {
        Intro,
        VeryEasy,
        Easy,
        Hard,
        VeryHard
    },
    {
        headerMode: 'none',
        initialRouteName: 'Intro'
    }
)

const Activity1Container = createAppContainer(Activity1Navigator);

export default class Activity1 extends Component {
    render() {
        return (
            <Activity1Container
                screenProps={{navigation: this.props.navigation}}
            />
        )
    }
}
