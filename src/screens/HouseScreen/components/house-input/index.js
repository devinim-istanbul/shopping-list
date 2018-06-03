import React from 'react';
import { View, TextInput } from 'react-native';

import styles from "../../styles/index";

export default (props) =>
  <View style={styles.inputContainer}>
    <View style={[styles.inputWrapper, styles.textInputWrapper]}>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        underlineColorAndroid="transparent"
        placeholderTextColor='#7ED321'
        {...props}
      />
    </View>
  </View>;
