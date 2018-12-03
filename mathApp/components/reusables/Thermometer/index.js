import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';
import globalStyles from 'mathApp/globalStyles';

const styles = _.cloneDeep(importedStyles);

export default class Thermometer extends Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={styles.top.root}
                >
                    <View
                        style={styles.top.background}
                    >

                    </View>
                </View>
                <View
                    style={styles.middle.root}
                >
                    <View
                        style={styles.middle.background}
                    >

                    </View>
                    <View
                        style={[styles.middle.mercury, {height: this.props.mercuryHeight}]}
                    >

                    </View>
                </View>
                <View
                    style={styles.bottom.root}
                >
                    <View
                        style={styles.bottom.mercury}
                    >

                    </View>
                </View>
                <View
                    style={styles.mercuryOverlay}
                >

                </View>
            </View>
        )
    }
}
