import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';

const styles = _.cloneDeep(importedStyles);

export default class Activity2 extends Component {
    render() {
        return(
            <View
                style={styles.root}
            >
                <View>
                    <Text
                        style={styles.activityTitle}
                    >
                        Activity 2
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.backButton.root}
                    onPress={() => {
                        this.props.navigation.navigate('Activity1')
                    }}
                >
                    <Text
                        style={styles.backButton.text}
                    >
                        back
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}