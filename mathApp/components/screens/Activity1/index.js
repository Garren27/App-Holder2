import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';

const styles = _.cloneDeep(importedStyles);

export default class Activity1 extends Component {
    render() {
        return(
            <View
                style={styles.root}
            >
                <View>
                    <Text
                        style={styles.centerBox.activityTitle}
                    >
                        Activity 1
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.forwardButton.root}
                    onPress={() => {
                        this.props.navigation.navigate('Activity2')
                    }}
                >
                    <Text
                        style={styles.forwardButton.text}
                    >
                        forward
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}