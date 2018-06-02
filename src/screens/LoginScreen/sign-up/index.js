import React from 'react';
import { View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import { LoginInput, LoginButton } from '../components';
import { signUp, updateUser } from '../../../redux/actions';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  constructor(props) {
    super(props);
    this.state = {
      name: 'Cezmi Kalorifer',
      email: 'cezmikalorifer@pastirmatadindapaylasimlar.com',
      password: 'czmklrfr',
      photoURL: ''
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

  async signUp(email, password, name, photoURL) {
    const { signUp, updateUser } = this.props;
    await signUp(email, password);
    await updateUser({
      displayName: name,
      photoURL
    });
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
              keyboardType="default"
            />
            <LoginInput
              value={this.state.photoURL}
              onChangeText={photoURL => this.setState({ photoURL })}
              placeholder="Photo URL"
              icon="user"
              keyboardType="default"
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
                this.signUp(
                  this.state.email,
                  this.state.password,
                  this.state.name,
                  this.state.photoURL
                )
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

export default connect(mapStateToProps, { signUp, updateUser })(SignUpScreen);
