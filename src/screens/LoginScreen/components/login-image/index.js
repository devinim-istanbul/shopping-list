import React from 'react';
import { View, Image } from 'react-native';

import styles from "../../styles/index";

const welcomeImage = require('../../../../../assets/welcome_logo.png');

export default () =>
  <View style={styles.imageContainer}>
    <Image source={welcomeImage} style={styles.image}/>
  </View>;
