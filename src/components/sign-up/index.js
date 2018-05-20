import React, { Component } from 'react'

import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';

import { signUp, updateUser } from '../../redux/actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      surname: ''
    };
  }

  componentWillReceiveProps(newProps) {
    newProps.user.token && this.updateUser(this.state.name, this.state.surname);
    newProps.user.token && newProps.user.displayName && this.navigate();
  }

  updateUser(name, surname) {
    this.props.updateUser({ displayName: `${name} ${surname}`});
  }


  navigate = () => {
    this.props.navigate('List');
  };

  signUp(email, password) {
    this.props.signUp(email, password);
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.nameContainer}>
            <TextInput
              style={styles.nameText}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Enter your e-mail"
              returnKeyType="next"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.nameContainer}>
            <TextInput
              style={styles.nameText}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Enter your password"
              returnKeyType="next"
              secureTextEntry
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.nameContainer}>
            <TextInput
              style={styles.nameText}
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })}
              autoCorrect={false}
              placeholder="Enter your name"
              returnKeyType="next"
              underlineColorAndroid="transparent"
            />
          </ View>
          <View style={styles.nameContainer}>
            <TextInput
              style={styles.nameText}
              value={this.state.surname}
              onChangeText={(surname) => this.setState({ surname })}
              autoCorrect={false}
              placeholder="Enter your surname"
              returnKeyType="next"
              underlineColorAndroid="transparent"
            />
          </ View>
        </ View>
        <View>
          <Button
            title="Sign Up"
            onPress={() => this.signUp(this.state.email, this.state.password)}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ userStore }) => ({
  user: userStore.user
});

export default connect(mapStateToProps, { signUp, updateUser })(SignUp);
