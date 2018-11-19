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
                <View>
                    <Text
                        style={styles.centerBox.welcomeMessage}
                    >
                        Welcome!
                    </Text>
                    <TouchableOpacity
                        style={styles.centerBox.button.root}
                        onPress={() => {
                            this.props.navigation.navigate('ActivityNavigator')
                        }}
                    >
                        <Text
                            style={styles.centerBox.button.text}
                        >
                            Play as Guest
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}