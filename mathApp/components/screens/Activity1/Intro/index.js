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
                    style={{
                        marginBottom: 40,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 45
                        }}
                    >
                        Please try again!
                    </Text>
                </View>
                <View
                    style={styles.thermometersContainer}
                >
                    <Thermometer
                        mercuryHeight={30 + 105}
                    />
                    <Thermometer
                        mercuryHeight={30 + 70}
                    />
                    <Thermometer
                        mercuryHeight={30 + 30}
                    />
                    <Thermometer
                        mercuryHeight={30 + 175}
                    />
                    <Thermometer
                        mercuryHeight={30 + 140}
                    />
                </View>
                <View
                    style={styles.bubblesContainer}
                >
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 65,
                            left: -165
                        }}
                    >
                        <NumberBubble
                            number={3}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 65,
                            left: -95
                        }}
                    >
                        <NumberBubble
                            number={2}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 65,
                            left: -25
                        }}
                    >
                        <NumberBubble
                            number={1}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 65,
                            left: 45
                        }}
                    >
                        <NumberBubble
                            number={5}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 65,
                            left: 115
                        }}
                    >
                        <NumberBubble
                            number={4}
                        />
                    </View>
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