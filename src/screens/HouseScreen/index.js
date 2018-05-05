import React from 'react';
import { View, Text, Button } from 'react-native';

class HouseScreen extends React.Component {

    navigate = () => {
        this.props.navigation.navigate('Button');
    };

    render() {
        return (
            <View>
                <Text>HouseScreen</Text>
                <Button title='Set House' onPress={this.navigate} />
            </View>
        )
    }
}

export default HouseScreen;
