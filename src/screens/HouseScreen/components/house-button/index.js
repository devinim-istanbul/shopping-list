import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from "../../styles/index";

export default (props) =>
  <View style={styles.inputContainer}>
    <TouchableOpacity style={{ flex: 1 }} onPress={props.onPress}>
      <View style={[styles.inputWrapper, styles.loginInputWrapper, props.style]}>
        <Text style={[styles.loginButtonText, props.textStyle]}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  </View>;
