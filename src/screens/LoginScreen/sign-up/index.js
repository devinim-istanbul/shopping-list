import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { LoginInput, LoginButton } from '../components';
import { signUp, updateUser } from '../../../redux/actions';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: 'Dinç Özdemir',
      email: 'dincozdemir@gmail.com',
      password: '12345678',
      photoURL:
        'https://scontent.fist2-2.fna.fbcdn.net/v/t1.0-9/12923114_10154183955717033_6649943181169319981_n.jpg?_nc_cat=0&oh=5042398bfbe9f34c7080fd34d762eaf2&oe=5BB6889C'
    };
  }

  static navigationOptions = {
    title: 'Sign Up'
  };

  async signUp(email, password, displayName, photoURL) {
    await this.props.signUp(email, password);
    await this.props.updateUser({ displayName, photoURL });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <LoginInput
              value={this.state.displayName}
              onChangeText={displayName => this.setState({ displayName })}
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
                  this.state.displayName,
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

const mapStateToProps = ({ sessionStore }) => ({
  user: sessionStore.user
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
