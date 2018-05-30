import React from 'react';
import { View, Image, Platform } from 'react-native';

const welcomeImage = require('../../../../../assets/welcome_logo.png');

export default () => (
  <View style={styles.imageContainer}>
    <Image source={welcomeImage} style={styles.image} />
  </View>
);

const common = {
  imageHeight: 85,
  imagePadding: 20
};

const styles = {
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: common.imagePadding,
    flex: Platform.OS === 'android' ? 1 : 2,
    minHeight: common.imageHeight + common.imagePadding * 2
  },
  image: {
    height: common.imageHeight,
    width: 300,
    bottom: 0
  }
};
