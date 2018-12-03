import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';
import globalStyles from 'mathApp/globalStyles';

// Import reusables
import NumberBubble from '@reusables/NumberBubble';

const styles = _.cloneDeep(importedStyles);

export default class Intro extends Component {
    render() {
        return(
            <View
                style={globalStyles.screenRoot('center')}
            >
                <TouchableOpacity
                    style={globalStyles.activitySelectorButton.root}
                    onPress={() => {
                        this.props.screenProps.navigation.navigate('ActivitySelector')
                    }}
                >
                    <Text
                        style={globalStyles.activitySelectorButton.text}
                    >
                        Activity Selector
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text>
                        Activity 1 Intro
                    </Text>
                </View>
                <NumberBubble/>
                <TouchableOpacity
                    style={globalStyles.forwardButton.root}
                    onPress={() => {
                        this.props.navigation.navigate('VeryEasy')
                    }}
                >
                    <Text
                        style={globalStyles.forwardButton.text}
                    >
                        Start
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}