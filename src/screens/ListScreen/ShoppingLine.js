import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';

const itemSelect = require('../../../assets/item_select.png');
const itemUnselect = require('../../../assets/item_unselect.png');

const selectedImage = {
  true: itemSelect,
  false: itemUnselect
};

const ShoppingLine = ({ lineItem, onAdd, onSubtract }) => (
  <View style={styles.container}>
    <View style={styles.selectContainer}>
      <TouchableWithoutFeedback>
        <Image
          source={selectedImage[lineItem.done]}
          style={styles.selectedImage}
        />
      </TouchableWithoutFeedback>
    </View>
    <View style={styles.quantityContainer}>
      <View style={[styles.addButton, styles.miniButton]}>
        <Icon
          name="plus"
          type="font-awesome"
          color="#d9d9d9"
          onPress={() => {
            onAdd(lineItem);
          }}
          size={16}
        />
      </View>
      <View style={[styles.quantity, styles.miniButton]}>
        <Text style={styles.quantityText}>{lineItem.quantity}</Text>
        <Text style={styles.unitText}> {lineItem.unit || 'ad.'}</Text>
      </View>
      <View style={[styles.subtractButton, styles.miniButton]}>
        <Icon
          name="minus"
          type="font-awesome"
          color="#d9d9d9"
          onPress={() => {
            onSubtract(lineItem);
          }}
          size={16}
        />
      </View>
    </View>
    <View style={styles.nameContainer}>
      <TextInput
        style={styles.nameText}
        value={lineItem.name}
        autoCorrect={false}
        underlineColorAndroid="transparent"
      />
    </View>
  </View>
);

const common = {
  fontSize: 20,
  textColor: '#6D6D6D',
  quantityTextColor: '#ff8a42',
  size: 70,
  padding: 7,
  miniButtonSize: 30,
  borderRadius: 5,
  selectedImageSize: 32
};

const styles = {
  container: {
    height: common.miniButtonSize * 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: common.borderRadius,
    marginBottom: 6
  },
  selectContainer: {
    width: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: common.size - common.padding,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedImage: {
    height: common.selectedImageSize,
    width: common.selectedImageSize
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: common.padding,
    flexDirection: 'column'
  },
  nameText: {
    fontSize: common.fontSize - 2,
    color: common.textColor,
    width: '100%'
  },
  quantity: {
    width: common.miniButtonSize + 25,
    flexDirection: 'row'
  },
  quantityText: {
    fontSize: common.fontSize + 4,
    fontWeight: 'bold',
    color: common.quantityTextColor,
    textAlign: 'center'
  },
  unitText: {
    fontSize: common.fontSize - 5,
    color: common.quantityTextColor,
    textAlign: 'center',
    bottom: 0
  },
  miniButton: {
    height: common.miniButtonSize,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    width: common.miniButtonSize,
    borderTopRightRadius: common.borderRadius
  },
  subtractButton: {
    width: common.miniButtonSize,
    borderBottomRightRadius: common.borderRadius
  }
};

export default ShoppingLine;
