import React from 'react';
import { View, Image, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../../../globals';

const headerImage = require('../../../../assets/welcome_logo.png');

const Header = ({ rightAction, leftAction }) => (
  <View style={styles.container}>
    <View style={styles.marginContainer}/>
    <View style={styles.mainContainer}>
      <LeftContainer leftAction={leftAction} />
      <CenterContainer />
      <RightContainer rightAction={rightAction} />
    </View>
  </View>
);

const LeftContainer = ({ leftAction = () => {} }) => (
  <View style={styles.leftContainer}>
    <Icon
      name="bars"
      type="font-awesome"
      color={globalStyles.primaryColor}
      onPress={leftAction}
      size={24}
    />
  </View>
);
const CenterContainer = () => (
  <View style={styles.centerContainer}>
    <Image source={headerImage} style={styles.headerImage} />
  </View>
);
const RightContainer = ({ rightAction = () => {} }) => (
  <View style={styles.rightContainer}>
    <Icon
      name="power-off"
      type="font-awesome"
      color={globalStyles.primaryColor}
      onPress={rightAction}
      size={24}
    />
  </View>
);

const styles = {
  container: {
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: globalStyles.headerBackgroundColor,
  },
  marginContainer: {
    height: globalStyles.headerSize[Platform.OS],
  },
  mainContainer: {
    height: globalStyles.headerSize[Platform.OS],
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerImage: {
    height: 35,
    width: 140
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: globalStyles.headerSize[Platform.OS]
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: globalStyles.headerSize[Platform.OS]
  }
};

export default Header;
