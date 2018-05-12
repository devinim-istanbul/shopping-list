import React from 'react';
import { View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import ShoppingLine from './ShoppingLine';

const ShoppingList = props => {
  const { list, onNewItem } = props;
  if (!list) return true;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {renderList(props)}
        <View style={styles.scrollExtraFooter} />
      </ScrollView>
      <Icon
        raised
        reverse
        name="plus"
        type="font-awesome"
        color="#55ab2b"
        containerStyle={styles.addButton}
        onPress={onNewItem}
      />
    </View>
  );
};

const renderList = ({ list, onAdd, onSubtract }) =>
  list.map(item => (
    <ShoppingLine
      key={item.name}
      lineItem={item}
      onAdd={onAdd}
      onSubtract={onSubtract}
    />
  ));

const common = {
  margin: 20
};

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#f2f2f2'
  },
  scrollContainer: {
    position: 'absolute',
    left: common.margin,
    top: common.margin,
    bottom: 0,
    right: common.margin
  },
  innerContainer: {},
  addButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0
  },
  scrollExtraFooter: {
    height: 65
  }
};

export default ShoppingList;
