import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { LoginInput, LoginButton } from '../../LoginScreen/components';
import Languages from '../../../localization';

import { createHouse } from '../../../redux/actions';

class CreateHouseScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      houseName: '',
      password: ''
    };
  }

  render() {
    const language = 'EN';
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <LoginInput
              value={this.state.houseName}
              onChangeText={houseName => this.setState({ houseName })}
              placeholder={Languages[language]['house-input-placeholder']}
              keyboardType="default"
            />
            <LoginInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder={Languages[language]['house-password-placeholder']}
              keyboardType="default"
              secureTextEntry
            />
            <LoginButton
              onPress={() =>
                this.props.createHouse(
                  this.state.houseName,
                  this.state.password
                )
              }
              text={Languages[language]['house-create']}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    flex: 4
  },
  signUpButton: {
    backgroundColor: 'transparent'
  },
  signUpButtonText: {
    color: '#7ED321'
  }
};

const mapStateToProps = ({ sessionStore }) => ({
  house: sessionStore.house
});

export default connect(
  mapStateToProps,
  { createHouse }
)(CreateHouseScreen);
