import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';
import globalStyles from 'mathApp/globalStyles';

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
                {/* <View>
                    <Text>
                        Activity 2 Intro
                    </Text>
                </View> */}
                            <View
                                style={{
                                    alignItems: 'center'
                                }}
                            >

                                <Text
                                    style={{
                                        fontSize: 20,
                                        position: 'absolute',
                                        top: -45,
                                        left: 54
                                    }}
                                >
                                    Try
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        position: 'absolute',
                                        top: -22,
                                        left: 43
                                    }}
                                >
                                    Again!
                                </Text>
                            </View>
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <View
                        style={{
                            margin: 10,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 20,
                                borderWidth: 5,
                                borderColor: 'black',
                                backgroundColor: globalStyles.thermometerGrey
                            }}
                        >

                        </View>
                            <Text
                                style={{

                                }}
                            >
                                7
                        </Text>
                    </View>
                    <View
                        style={{
                            margin: 10,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 20,
                                borderWidth: 5,
                                borderColor: 'black',
                                backgroundColor: globalStyles.thermometerGrey
                            }}
                        >

                        </View>
                            <Text
                                style={{

                                }}
                            >
                                8
                        </Text>
                    </View>
                    <View
                        style={{
                            margin: 10,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 20,
                                borderWidth: 5,
                                borderColor: 'black',
                                backgroundColor: globalStyles.thermometerGrey
                            }}
                        >

                        </View>
                            <Text
                                style={{

                                }}
                            >
                                9
                        </Text>
                    </View>
                    <View
                        style={{
                            margin: 10,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 20,
                                borderWidth: 5,
                                borderColor: 'red',
                                backgroundColor: globalStyles.thermometerGrey
                            }}
                        >

                        </View>
                            <Text
                                style={{

                                }}
                            >
                                10
                        </Text>
                    </View>
                    <View
                        style={{
                            margin: 10,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 20,
                                borderWidth: 5,
                                borderColor: 'black',
                                backgroundColor: globalStyles.thermometerGrey
                            }}
                        >

                        </View>
                            <Text
                                style={{

                                }}
                            >
                                11
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 50
                    }}
                >
                    <View
                        style={{
                            margin: 10,
                            height: 30,
                            width: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            borderWidth: 2,
                            borderColor: 'black',
                            backgroundColor: 'yellow'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20
                            }}
                        >
                            1
                        </Text>
                    </View>
                    <View
                        style={{
                            margin: 10,
                            height: 30,
                            width: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            borderWidth: 2,
                            borderColor: 'black',
                            backgroundColor: 'yellow'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20
                            }}
                        >
                            1
                        </Text>
                    </View>
                    <View
                        style={{
                            margin: 10,
                            height: 30,
                            width: 45,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderColor: 'black',
                            backgroundColor: 'green'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20
                            }}
                        >
                            5
                        </Text>
                    </View>
                    <View
                        style={{
                            margin: 10,
                            height: 30,
                            width: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            borderWidth: 2,
                            borderColor: 'black',
                            backgroundColor: 'yellow'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20
                            }}
                        >
                            2
                        </Text>
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