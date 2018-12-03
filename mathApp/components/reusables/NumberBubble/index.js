import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';
import globalStyles from 'mathApp/globalStyles';

const styles = _.cloneDeep(importedStyles);

export default class NumberBubble extends Component {
    render() {
        return(
            <View
                style={styles.container}
            >
                
            </View>
        )
    }
}