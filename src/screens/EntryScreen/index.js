import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { initialize } from '../../redux/actions';

class EntryScreen extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default connect(null, { initialize })(EntryScreen);
