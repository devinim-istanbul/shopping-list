import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { HouseInput, HouseButton } from '../components';
import Languages from '../../../localization';

import { createHouse } from '../../../redux/actions';

class CreateHouseScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      houseName: ''
    };
  };

  render() {
    const language = 'EN';
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <HouseInput
              value={this.state.houseName}
              onChangeText={houseName => this.setState({ houseName })}
              placeholder={ Languages[language]['house-input-placeholder'] }
              keyboardType="default"
            />
            <HouseButton
              onPress={() => this.props.createHouse(this.state.houseName)}
              text={ Languages[language]['house-create'] }
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
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 4,
  },
  signUpButton: {
    backgroundColor: 'transparent',
  },
  signUpButtonText: {
    color: '#7ED321'
  }
};

const mapStateToProps = ({ sessionStore }) => ({
  house: sessionStore.house
});

export default connect(mapStateToProps, { createHouse })(CreateHouseScreen);
