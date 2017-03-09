/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
} from 'react-native';

import DatePicker from './date-picker'

export default class reactNativeSandbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <DatePicker />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('reactNativeSandbox', () => reactNativeSandbox);
