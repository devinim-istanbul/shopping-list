import React from 'react';
import { View, AppState, UIManager, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import ShoppingList from './ShoppingList';

import {
  loadShoppinglistEventsFromFirestore,
  pushShoppinglistEventToFirestore,
  generateSnaphostInFirestore
} from '../../redux/actions';
import { SHOPPING_LIST } from "../../redux/types";

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Shopping List'
  };

  componentDidMount() {
    this.props.loadShoppinglistEventsFromFirestore();

    AppState.addEventListener('change', state => {
      if (state === 'background' || state === 'inactive') {
        this.props.generateSnaphostInFirestore();
      }
    });
  }

  componentWillUpdate() {
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', state => {
      if (state === 'background' || state === 'inactive') {
        this.props.generateSnaphostInFirestore();
      }
    });
  }

  onAdd = item => {
    this.props.pushShoppinglistEventToFirestore({
      type: SHOPPING_LIST.INCREMENT_QUANTITY,
      payload: item
    });
  };

  onSubtract = item => {
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

  onNewItem = () => {
    this.props.pushShoppinglistEventToFirestore({
      type: SHOPPING_LIST.ADD_ITEM,
      payload: {
        name: 'Elma',
        done: false,
        quantity: 3
      }
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
        <ShoppingList
          itemProps={{
            onAdd: this.onAdd,
            onSubtract: this.onSubtract,
            onNewItem: this.onNewItem,
            onRemoveItem: this.onRemoveItem,
            onToggle: this.onToggle
          }}
          list={this.props.shoppingList}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

const mapStateToProps = ({ shoppingListStore }) => {
  const { shoppingList } = shoppingListStore;
  return {
    shoppingList
  };
};

export default connect(mapStateToProps, {
  loadShoppinglistEventsFromFirestore,
  pushShoppinglistEventToFirestore,
  generateSnaphostInFirestore
})(ListScreen);
