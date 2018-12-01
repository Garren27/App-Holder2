import React, {Component} from 'react';
import {View, Text, TouchableOpacity, PanResponder, Animated} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';
import globalStyles from 'mathApp/globalStyles';

const styles = _.cloneDeep(importedStyles);

export default class Easy extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.ValueXY();
        this._value = {x: 0, y: 0}
        this.animatedValue.addListener((value) => this._value = value);
        this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderGrant: (e, gestureState) => {
            this.animatedValue.setOffset({
            x: this._value.x,
            y: this._value.y,
            })
            this.animatedValue.setValue({ x: 0, y: 0})
        },
        onPanResponderMove: Animated.event([
            null, { dx: this.animatedValue.x, dy: this.animatedValue.y}
        ]),
        onPanResponderRelease: (e, gestureState) => {
            this.animatedValue.flattenOffset();
            Animated.decay(this.animatedValue, {
            deceleration: 0.99,
            velocity: { x: gestureState.vx, y: gestureState.vy }
            }).start();
        },
        })
    }

    render() {
        const animatedStyle = {
            transform: this.animatedValue.getTranslateTransform()
        }
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
                <Animated.View style={[styles.box, animatedStyle]} {...this.panResponder.panHandlers}>
                    <Text style={styles.text}>Drag Me</Text>
                </Animated.View>
                <View>
                    <Text>
                        Very Easy
                    </Text>
                </View>
                <TouchableOpacity
                    style={globalStyles.forwardButton.root}
                    onPress={() => {
                        this.props.navigation.navigate('Easy')
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