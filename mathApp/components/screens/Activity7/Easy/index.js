import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';
import globalStyles from 'mathApp/globalStyles';

const styles = _.cloneDeep(importedStyles);

export default class Easy extends Component {
    render() {
        return(
            <View
                style={globalStyles.screenRoot('center')}
            >
                <TouchableOpacity
                    style={globalStyles.backButton.root}
                    onPress={() => {
                        this.props.navigation.navigate('VeryEasy')
                    }}
                >
                    <Text
                        style={globalStyles.backButton.text}
                    >
                        Easier
                    </Text>
                </TouchableOpacity>
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
                        Easy
                    </Text>
                </View>
                <TouchableOpacity
                    style={globalStyles.forwardButton.root}
                    onPress={() => {
                        this.props.navigation.navigate('Hard')
                    }}
                >
                    <Text
                        style={globalStyles.forwardButton.text}
                    >
                        Harder
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}