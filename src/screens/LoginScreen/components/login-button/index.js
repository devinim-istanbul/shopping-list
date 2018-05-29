import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import commonStyles from '../../styles/index';
import { globalStyles } from '../../../../globals';

export default props => (
  <View style={commonStyles.inputContainer}>
    <TouchableOpacity style={{ flex: 1 }} onPress={props.onPress}>
      <View
        style={[
          commonStyles.inputWrapper,
          styles.loginInputWrapper,
          props.style
        ]}
      >
        <ButtonIcon {...props} />
        <ButtonText {...props} />
      </View>
    </TouchableOpacity>
  </View>
);

const ButtonText = ({ text, textStyle }) => {
  if (!text) return null;
  return <Text style={[commonStyles.loginButtonText, textStyle]}>{text}</Text>;
};

const ButtonIcon = ({ icon }) => {
  if (!icon) return null;
  return <Icon name={icon} type="font-awesome" color="#fff" size={24} />;
};

const styles = {
  loginInputWrapper: {
    backgroundColor: globalStyles.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
};
