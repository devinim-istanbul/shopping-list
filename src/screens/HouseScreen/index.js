import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { navigateBySessionState } from '../../redux/actions';

import SignUp from '../../components/sign-up';
import SignIn from '../../components/sign-in';

class HouseScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 'Buttons'
    };
  }

  static navigationOptions = {
    title: 'Select House'
  };


  render() {
  const BackButton = (<Button
    title="Back"
    onPress={() => this.setState({ show: 'Buttons' })}
  />);
    return (
      <View>
        { this.state.show === 'SignUp' &&
          <View>
            <View>
              { BackButton }
            </ View>
            <View>
              <SignUp navigate={this.props.navigation.navigate} />
            </ View>
        </ View>
        }
        { this.state.show === 'SignIn' &&
          <View>
            <View>
              { BackButton }
            </ View>
            <View>
              <SignIn navigate={this.props.navigation.navigate} />
            </ View>
          </ View>
        }
        { this.state.show === 'Buttons' &&
          <View>
            <Button
              title="Sign Up"
              onPress={() => this.setState({ show: 'SignUp' })}
            />
            <Button
              title="Sign In"
              onPress={() => this.setState({ show: 'SignIn' })}
            />
          </ View>
        }

      </View>
    );
  }
}

export default connect(null, {
  navigateBySessionState
})(HouseScreen);
