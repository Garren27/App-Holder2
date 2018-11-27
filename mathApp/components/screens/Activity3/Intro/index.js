import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';

const styles = _.cloneDeep(importedStyles);

export default class Intro extends Component {
    render() {
        return(
            <View
                style={styles.root}
            >
                <TouchableOpacity
                    style={styles.backButton.root}
                    onPress={() => {
                        this.props.screenProps.navigation.navigate('ActivitySelector')
                    }}
                >
                    <Text
                        style={styles.backButton.text}
                    >
                        Activity Selector
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text
                        style={styles.centerBox.activityTitle}
                    >
                        Activity 3 Intro
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.forwardButton.root}
                    onPress={() => {
                        this.props.navigation.navigate('VeryEasy')
                    }}
                >
                    <Text
                        style={styles.forwardButton.text}
                    >
                        start
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}