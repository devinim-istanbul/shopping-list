import React from 'react';
import { View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import { LoginInput, LoginButton } from '../components';
import { signUp } from '../../../redux/actions';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.token) this.navigate();
  }

  navigate = () => {
    const action = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'List' })]
    });
    this.props.navigation.dispatch(action);
  };

  signIn(email, password) {
    this.props.signUp(email, password);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <LoginInput
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              placeholder="Name"
              icon="user"
              keyboardType="email-address"
            />
            <LoginInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder="E-mail"
              icon="envelope"
              keyboardType="email-address"
            />
            <LoginInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
              icon="lock"
              secureTextEntry
            />
            <LoginButton
              onPress={() =>
                this.props.signUp(this.state.email, this.state.password)
              }
              text="Sign Up"
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ userStore }) => ({
  user: userStore.user
});

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    flex: 4
  }
};

export default connect(mapStateToProps, { signUp })(SignInScreen);