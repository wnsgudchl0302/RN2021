/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
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
class MyComponent extends Component {
  constructor(){
    super()
    this.state = {
      book: 'React Native in Action'
    }
  }
  updateBook() {
    this.setState({ book: 'Express in Action' })
  }
  render() {
    const { book } = this.state
    return (
      <BookDisplay 
       updateBook={ () => this.updateBook() } 
       book={ book } />
    )
  }
}
class BookDisplay extends Component {
  render() {
    const { book, updateBook } = this.props
    return (
      <View>
        <Text 
         onPress={ updateBook }>
          { book }
        </Text>
      </View>
    )
  }
}


export default MyComponent;
