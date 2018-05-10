import React from 'react';
import { View, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

const ShoppingLine = ({ lineItem }) => (
  <View style={styles.container}>
    <View style={styles.doneContainer}>
      <CheckBox checked={lineItem.done} containerStyle={styles.checkbox} />
    </View>
    <View style={styles.nameContainer}>
      <TextInput
        style={styles.nameText}
        value={lineItem.name}
        autoCorrect={false}
        underlineColorAndroid="transparent"
      />
    </View>
    <View style={styles.quantityContainer}>
      <TextInput
        style={styles.quantityText}
        value={`${lineItem.quantity}`}
        autoCorrect={false}
        underlineColorAndroid="transparent"
      />
    </View>
  </View>
);

const common = {
  fontSize: 20,
  size: 50,
  padding: 5
};

const styles = {
  container: {
    height: common.size,
    flexDirection: 'row',
    padding: common.padding,
    backgroundColor: '#fff',
    elevation: 2,
    marginBottom: 4
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: common.size - common.padding
  },
  doneContainer: {
    width: common.size,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 3
  },
  quantityContainer: {
    width: common.size,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 3,
    marginLeft: common.padding
  },
  nameText: {
    fontSize: common.fontSize - 4,
    width: '100%',
    textAlign: 'center'
  },
  quantityText: {
    fontSize: common.fontSize,
    width: '100%',
    textAlign: 'center'
  }
};

export default ShoppingLine;
