import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Sentry from 'sentry-expo';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import firebase from 'firebase';

import config from './config';
import reducers from './src/redux/reducers';
import Router from './src/Router';

import Navigator from './src/redux/listeners';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, Navigator));

class App extends React.Component {
  constructor() {
    super();
    console.log(config);
    // eslint-disable-next-line no-console
    console.ignoredYellowBox = ['Setting a timer'];
    Sentry.init(config.sentry);
  }

  state = {
    appLoaded: false
  };

  componentWillMount() {
    firebase.initializeApp(config.firebase);
    this.setState({ appLoaded: true });
  }

  renderApp() {
    if (this.state.appLoaded) {
      return (
        <View style={styles.container}>
          <Router />
        </View>
      );
    }
    return <Text>Loading...</Text>;
  }

  render() {
    return <Provider store={store}>{this.renderApp()}</Provider>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
