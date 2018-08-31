import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { initialize } from '../../redux/actions';

class EntryScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.initialize();
  }

  render() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default connect(
  null,
  { initialize }
)(EntryScreen);
