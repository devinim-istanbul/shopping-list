import React from 'react';
import { View, FlatList, Keyboard, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';

import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import ListItem from './ListItem';
import EditListItem from './EditListItem';
import { globalStyles } from '../../../globals';
import shoppingListStyles from './styles';

const slideAnimation = new SlideAnimation({
  slideFrom: 'top'
});

const initialItem = {
  quantity: 1,
  unit: 'ad.'
};

class ShoppingList extends React.PureComponent {
  constructor() {
    super();
    this.state = { editItem: { ...initialItem } };
  }

  onNewItem = () => {
    this.setState({ editItem: { ...initialItem } });
    this.popupDialog.show();
  };

  onEditItem = item => {
    this.setState({ editItem: { ...item } });
    this.popupDialog.show();
  };

  onFinishSave = () => {
    this.props.onSaveItem(this.state.editItem);
    this.popupDialog.dismiss();
  };

  setProp = (prop, value) => {
    this.setState({
      editItem: { ...this.state.editItem, [prop]: value }
    });
  };

  setNameInput = input => {
    this.nameInput = input;
  };

  render() {
    const { list, itemProps } = this.props;
    const { height, margin } = shoppingListStyles.editListItem;

    if (!list) return null;

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={globalStyles.primaryColor}
          translucent={false}
        />
        <View style={styles.scrollContainer}>
          <FlatList
            data={list}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({ item, index }) => (
              <ListItem
                item={item}
                firstItem={index === 0}
                lastItem={index === list.length - 1}
                index={index}
                onEditItem={this.onEditItem}
                {...itemProps}
              />
            )}
          />
        </View>
        <Icon
          reverse
          name="plus"
          type="font-awesome"
          color={globalStyles.primaryColor}
          containerStyle={styles.addButton}
          onPress={this.onNewItem}
        />
        <PopupDialog
          height={height + 2 * margin}
          dialogStyle={{
            backgroundColor: 'transparent',
            top: 0,
            position: 'absolute'
          }}
          ref={popupDialog => {
            this.popupDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
          onShown={() => {
            this.nameInput.focus();
          }}
          onDismissed={() => {
            Keyboard.dismiss();
          }}
        >
          <EditListItem
            item={this.state.editItem}
            setProp={this.setProp}
            onFinishSave={this.onFinishSave}
            setNameInput={this.setNameInput}
          />
        </PopupDialog>
      </View>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    backgroundColor: '#eaedec'
  },
  scrollContainer: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0
  },
  innerContainer: {},
  addButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    right: 0
  },
  contentContainerStyle: {
    paddingBottom: 70,
    paddingTop: 10
  }
};

export default ShoppingList;
