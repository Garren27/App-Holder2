import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    PanResponder,
    Animated
} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';

const styles = _.cloneDeep(importedStyles);

export default class Intro extends Component {

    componentWillMount() {
        
    }

    render() {

        return(
            <View
                style={styles.root}
            >
                <Text
                    style={styles.centerBox.welcomeMessage}
                >
                    Welcome to the Math App!
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
                <Text> </Text>
                <TouchableOpacity
                    style={styles.centerBox.button.root}
                    onPress={() => {
                        this.props.navigation.navigate('LoginNavigator')
                    }}
                >
                    <Text
                        style={styles.centerBox.button.text}
                    >
                        Login to Play
                    </Text>
                </TouchableOpacity>
              
            </View>
        )
    }
}