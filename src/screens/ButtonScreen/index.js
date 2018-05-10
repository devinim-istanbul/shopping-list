import React from 'react';
import { View, Text, Button } from 'react-native';

class ButtonScreen extends React.Component {
  navigate = () => {
    this.props.navigation.navigate('List');
  };

  render() {
    return (
      <View>
        <Text>ButtonScreen</Text>
        <Button title="Shop" onPress={this.navigate} />
      </View>
    );
  }
}

export default ButtonScreen;
