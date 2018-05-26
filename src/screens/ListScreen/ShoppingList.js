import React from 'react';
import { View, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import ListItem from './ListItem';

const ShoppingList = props => {
  const { list, itemProps } = props;
  if (!list) return true;
  return (
    <View style={styles.container}>
      <View
        style={styles.scrollContainer}
      >
        {renderList(props, itemProps)}
      </View>

      <Icon
        reverse
        name="plus"
        type="font-awesome"
        color="#55ab2b"
        containerStyle={styles.addButton}
        onPress={itemProps.onNewItem}
      />
    </View>
  );
};

const renderList = (props, itemProps) =>
  <FlatList
    style={styles.flatList}
    data={props.list}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    keyExtractor={item => item.id}
    contentContainerStyle={styles.contentContainerStyle}
    renderItem={({ item }) => <ListItem
      item={item}
      {...itemProps}
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
    backgroundColor: '#f2f2f2',
  },
  scrollContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  innerContainer: {},
  addButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    right: 0,
  },
  contentContainerStyle: {
    paddingBottom: 65,


  },
  flatList: {
  }
};

export default ShoppingList;
