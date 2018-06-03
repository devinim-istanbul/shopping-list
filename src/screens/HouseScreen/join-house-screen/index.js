import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { HouseInput, HouseButton } from '../components';
import Languages from '../../../localization';

import { joinHouse, initializeHouse } from '../../../redux/actions';

class JoinHouseScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      houseName: 'devinim',
      loading: true
    };
  };

  async componentWillMount() {
    await this.props.initializeHouse();
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.house.id) this.proceed();
    else this.setState({ loading: false });
  }

  proceed() {
    this.props.navigation.navigate('List');
  };

  joinHouse(name) {
    this.props.joinHouse(name);
  }

  render() {
    const language = 'EN';

    if (this.state.loading) {
      return (
        <View>
          <Text>
            Loading...
          </Text>
        </View>
      )
    }

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
              onPress={() => this.props.joinHouse(this.state.houseName)}
              text={ Languages[language]['house-join'] }
            />
            <HouseButton
              onPress={() => this.props.navigation.navigate('CreateHouse')}
              text={ Languages[language]['house-create'] }
              style={styles.signUpButton}
              textStyle={styles.signUpButtonText}
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

export default connect(mapStateToProps, { joinHouse, initializeHouse })(JoinHouseScreen);
