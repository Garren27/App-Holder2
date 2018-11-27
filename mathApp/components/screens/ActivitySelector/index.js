import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';

const styles = _.cloneDeep(importedStyles);

export default class ActivitySelector extends Component {
    render() {
        return(
            <View
                style={styles.root}
            >
                <View
                >
                    <TouchableOpacity
                        style={styles.activitySelectionButton.root}
                        onPress={() => this.props.navigation.navigate('Activity1')}
                        >
                        <Text>Activity 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.activitySelectionButton.root}
                        onPress={() => this.props.navigation.navigate('Activity2')}
                        >
                        <Text>Activity 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.activitySelectionButton.root}
                        onPress={() => this.props.navigation.navigate('Activity3')}
                    >
                        <Text>Activity 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.activitySelectionButton.root}
                        onPress={() => this.props.navigation.navigate('Activity4')}
                    >
                        <Text>Activity 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.activitySelectionButton.root}
                        onPress={() => this.props.navigation.navigate('Activity5')}
                    >
                        <Text>Activity 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.activitySelectionButton.root}
                        onPress={() => this.props.navigation.navigate('Activity6')}
                    >
                        <Text>Activity 6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.activitySelectionButton.root}
                        onPress={() => this.props.navigation.navigate('Activity7')}
                    >
                        <Text>Activity 7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.activitySelectionButton.root}
                        onPress={() => this.props.navigation.navigate('Activity8')}
                    >
                        <Text>Activity 8</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}