import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

//Firebase
import firebase from 'firebase';

import Router from './src/Router';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
