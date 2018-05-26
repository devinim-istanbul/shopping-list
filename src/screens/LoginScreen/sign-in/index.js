import React from 'react';
import { View } from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from 'react-redux';

import { LoginInput, LoginButton, LoginImage } from "../components";
import { signIn } from "../../../redux/actions";

class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillReceiveProps(newProps) {
    if(newProps.user.token) this.navigate();
  }

  navigate = () => {
    const action = StackActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName: "List" }) ]
    });
    this.props.navigation.dispatch(action);
  };

  navigateSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render(){
    return (
      <View style={styles.container}>
        <LoginImage />
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <LoginInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder='E-mail'
              keyboardType="email-address"
            />
            <LoginInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder='Password'
              secureTextEntry
            />
            <LoginButton
              onPress={() => this.props.signIn(this.state.email, this.state.password)}
              text='Sign In'
            />
            <LoginButton
              onPress={() => this.navigateSignUp()}
              text='Sign Up'
              style={styles.signUpButton}
              textStyle={styles.signUpButtonText}
            />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ userStore }) => ({
  user: userStore.user
});

const styles= {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 3,
  },
  signUpButton: {
    backgroundColor: 'transparent',
  },
  signUpButtonText: {
    color: '#7ED321'
  }
};

export default connect(mapStateToProps, { signIn })(SignInScreen);
