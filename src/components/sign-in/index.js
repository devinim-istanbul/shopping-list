import React, { Component } from 'react';

import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';

import { signIn } from '../../redux/actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillReceiveProps(newProps) {
    newProps.user.token && this.navigate();
  }

  navigate = () => {
    this.props.navigate('List');
  };

  signIn(email, password) {
    this.props.signIn(email, password);
  }

  render() {
    return (
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
        <Button
          title="Sign In"
          onPress={() => this.signIn(this.state.email, this.state.password)}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ userStore }) => ({
  user: userStore.user
});

export default connect(mapStateToProps, { signIn })(SignIn);
