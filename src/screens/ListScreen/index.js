import React from 'react';
import { View, AppState } from "react-native";
import { connect } from 'react-redux';
import ShoppingList from './shopping-list';
import Header from './shopping-list/Header';

import {
  loadShoppinglistEventsFromFirestore,
  pushShoppinglistEventToFirestore,
  generateSnaphostInFirestore,
  signOut
} from '../../redux/actions';

import { SHOPPING_LIST } from '../../redux/types';

class ListScreen extends React.Component {
  static navigationOptions = () => ({
    header: null
  });

  componentDidMount() {
    this.props.loadShoppinglistEventsFromFirestore();

    AppState.addEventListener('change', state => {
      if (state === 'background' || state === 'inactive') {
        this.props.generateSnaphostInFirestore();
      }
    });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', state => {
      if (state === 'background' || state === 'inactive') {
        this.props.generateSnaphostInFirestore();
      }
    });
  }

  onIncrement = item => {
    this.props.pushShoppinglistEventToFirestore({
      type: SHOPPING_LIST.INCREMENT_QUANTITY,
      payload: item
    });
  };

  onDecrement = item => {
    this.props.pushShoppinglistEventToFirestore({
      type: SHOPPING_LIST.DECREMENT_QUANTITY,
      payload: item
    });
  };

  onToggle = item => {
    this.props.pushShoppinglistEventToFirestore({
      type: SHOPPING_LIST.EDIT_ITEM,
      payload: { ...item, done: !item.done }
    });
  };

  onSaveItem = item => {
    const type = item.id ? SHOPPING_LIST.EDIT_ITEM : SHOPPING_LIST.ADD_ITEM;
    this.props.pushShoppinglistEventToFirestore({
      type,
      payload: item
    });
  };

  onRemoveItem = item => {
    this.props.pushShoppinglistEventToFirestore({
      type: SHOPPING_LIST.REMOVE_ITEM,
      payload: {
        id: item.id
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header rightAction={() => { this.props.signOut(); }} />
        <View style={styles.innerContainer}>
        <ShoppingList
          itemProps={{
            onIncrement: this.onIncrement,
            onDecrement: this.onDecrement,
            onRemoveItem: this.onRemoveItem,
            onToggle: this.onToggle
          }}
          onSaveItem={this.onSaveItem}
          list={this.props.shoppingList}
        />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
  }
};

const mapStateToProps = ({ shoppingListStore, sessionStore }) => {
  const { shoppingList } = shoppingListStore;
  const { user } = sessionStore;
  return {
    shoppingList,
    user
  };
};

export default connect(mapStateToProps, {
  loadShoppinglistEventsFromFirestore,
  pushShoppinglistEventToFirestore,
  generateSnaphostInFirestore,
  signOut
})(ListScreen);
