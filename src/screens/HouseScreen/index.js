import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { navigateBySessionState } from '../../redux/actions';

class HouseScreen extends React.Component {
  static navigationOptions = {
    title: 'Select House'
  };
  navigate = () => {
    this.props.navigation.navigate('Button');
  };

  render() {
    return (
      <View>
        <Text>HouseScreen</Text>
        <Button title="Set House" onPress={this.navigate} />
        <Button
          title="Test State"
          onPress={() => this.props.navigateBySessionState()}
        />
      </View>
    );
  }
}

const mapStateToProps = () => ({
  test: 1
});

export default connect(mapStateToProps, {
  navigateBySessionState
})(HouseScreen);
