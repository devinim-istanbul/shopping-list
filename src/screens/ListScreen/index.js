import React from 'react';
import { View, UIManager, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import ShoppingList from './ShoppingList';

import {
  loadShoppinglistEventsFromFirestore,
  pushShoppinglistEventToFirestore
} from '../../redux/actions';

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Shopping List'
  };

  componentDidMount() {
    this.props.loadShoppinglistEventsFromFirestore();
  }

  componentWillUpdate() {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);
    if (this.props.shoppingList) {
      LayoutAnimation.spring();
    }
  }

  onAdd = item => {
    console.log('Add', item);
    this.props.pushShoppinglistEventToFirestore({
      type: 'INCREMENT_QUANTITY',
      payload: item
    });
  };

  onSubtract = item => {
    console.log('Subtract', item);
  };

  onNewItem = () => {
    console.log('new');
    this.props.pushShoppinglistEventToFirestore({
      type: 'ADD_ITEM',
      payload: {
        name: 'Elma',
        done: false,
        quantity: 3
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ShoppingList
          list={this.props.shoppingList}
          onAdd={this.onAdd}
          onSubtract={this.onSubtract}
          onNewItem={this.onNewItem}
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
  pushShoppinglistEventToFirestore
})(ListScreen);
