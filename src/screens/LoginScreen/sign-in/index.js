import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import { LoginInput, LoginButton, LoginImage } from '../components';
import { signIn, initialize } from '../../../redux/actions';
import { globalStyles } from '../../../globals';

class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'cezmikalorifer@pastirmatadindapaylasimlar.com',
      password: 'czmklrfr',
      loading: true
    };
  }

  async componentWillMount() {
    await this.props.initialize();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.token) this.navigate();
    else this.setState({ loading: false });
  }

  navigate = () => {
    const action = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'List' })]
    });
    this.props.navigation.dispatch(action);
  };

  navigateSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    const loading = (
      <View>
        <Text>
          Loading...
        </Text>
      </View>
    );

    const content = (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
          translucent={false}
        />
        <LoginImage />
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <LoginInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder="E-mail"
              icon="user"
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
                this.props.signIn(this.state.email, this.state.password)
              }
              text="Sign In"
            />
            <LoginButton
              onPress={() => this.navigateSignUp()}
              icon="google-plus"
              style={{ backgroundColor: globalStyles.googleColor }}
            />
            <LoginButton
              onPress={() => this.navigateSignUp()}
              icon="facebook"
              style={{ backgroundColor: globalStyles.facebookColor }}
            />
            <LoginButton
              onPress={() => this.navigateSignUp()}
              text="Sign Up"
              style={styles.signUpButton}
              textStyle={styles.signUpButtonText}
            />
          </View>
        </View>
      </View>
    )

    return this.state.loading ? loading : content;
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
    flex: 6
  },
  signUpButton: {
    backgroundColor: 'transparent'
  },
  signUpButtonText: {
    color: globalStyles.primaryColor
  }
};

export default connect(mapStateToProps, { signIn, initialize })(SignInScreen);
