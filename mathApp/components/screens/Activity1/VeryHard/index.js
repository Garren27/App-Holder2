import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';

const styles = _.cloneDeep(importedStyles);

export default class VeryHard extends Component {
    render() {
        return(
            <View
                style={styles.root}
            >
                <TouchableOpacity
                    style={styles.backButton.root}
                    onPress={() => {
                        this.props.navigation.navigate('Hard')
                    }}
                >
                    <Text
                        style={styles.backButton.text}
                    >
                        back
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text
                        style={styles.centerBox.activityTitle}
                    >
                        VeryHard
                    </Text>
                </View>
            </View>
        )
    }
}