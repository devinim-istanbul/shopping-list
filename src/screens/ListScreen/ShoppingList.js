import React from 'react';
import { View, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import ShoppingItem from './ShoppingItem';

const ShoppingList = props => {
  const { list, onNewItem } = props;
  if (!list) return true;
  return (
    <View style={styles.container}>
      <View
        style={styles.scrollContainer}
      >
        {renderList(props)}
      </View>
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

const renderList = ({ list, onAdd, onSubtract, onToggle }) =>
  <FlatList
    data={list}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => item.id}
    contentContainerStyle={styles.contentContainerStyle}
    renderItem={({item}) => <ShoppingItem
      lineItem={item}
      onAdd={onAdd}
      onSubtract={onSubtract}
      onToggle={onToggle}
    />}
  />;

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
    bottom: 0,
    right: common.margin,
    top: 0,
  },
  innerContainer: {},
  addButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0
  },
  contentContainerStyle: {
    paddingBottom: 65,
    paddingTop: common.margin,


  }
};

export default ShoppingList;
