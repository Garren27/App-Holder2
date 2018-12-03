import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';
import globalStyles from 'mathApp/globalStyles';

// Import reusables
import NumberBubble from '@reusables/NumberBubble';
import Thermometer from '@reusables/Thermometer';

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
                <View
                    style={styles.thermometersContainer}
                >
                    <Thermometer mercuryHeight={50}/>
                    <Thermometer/>
                    <Thermometer/>
                    <Thermometer/>
                    <Thermometer/>
                </View>
                <View
                    style={styles.bubblesContainer}
                >
                    <NumberBubble
                        number={1}
                    />
                    <NumberBubble
                        number={2}
                    />
                    <NumberBubble
                        number={3}
                    />
                    <NumberBubble
                        number={4}
                    />
                    <NumberBubble
                        number={5}
                    />
                </View>
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