import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

//Firebase
import firebase from 'firebase';

import config from './config';
import reducers from './src/redux/reducers';
import Router from './src/Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {

    componentWillMount(){
        firebase.initializeApp(config.firebase);
        this.setState({ appLoaded: true });
    }

    renderApp(){
        if(this.state.appLoaded) {
            return (
                <View style={styles.container}>
                    <Router />
                </View>
            );
        }
        return <Text>Loading...</Text>;
    }

    render() {
        return (
            <Provider store={store}>
                {this.renderApp()}
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
