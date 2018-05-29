import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import commonStyles from '../../styles/index';
import { globalStyles } from '../../../../globals';

export default props => (
  <View style={commonStyles.inputContainer}>
    <Input
      containerStyle={{ width: '100%', paddingLeft: 10, paddingRight: 10 }}
      placeholder={props.placeholder}
      autoCorrect={false}
      autoCapitalize="none"
      returnKeyType="next"
      leftIcon={
        <Icon name={props.icon} size={24} color={globalStyles.primaryColor} />
      }
      {...props}
    />
  </View>
);
