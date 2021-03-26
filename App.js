/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  state = {
    year: 2016,
    name: 'Nader Dabit',
    colors: ['blue']
  }

 

  render() {
    return (
      < View >
        <Text>My name is : {this.state.name}</Text>
        <Text>The Year is : {this.state.year}</Text>
        <Text>My colors are : {this.state.colors[0]}</Text>
      </View >
    )
  }
}

export default App;
