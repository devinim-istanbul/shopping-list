import React from 'react';
import { View, AppState } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
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
  static navigationOptions = ({ navigation }) => {
    const signOutNavigator = () => {
      const action = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'SignIn' })]
      });
      navigation.dispatch(action);
    };
    return {
      header: <Header rightAction={() => {
        navigation.state.params.signOut();
        signOutNavigator();
      }} />
    };
  };

  componentWillMount = () => {
    this.props.navigation.setParams({ signOut: this.props.signOut });
  }

  componentDidMount() {
    this.props.loadShoppinglistEventsFromFirestore();

    AppState.addEventListener('change', state => {
      if (state === 'background' || state === 'inactive') {
        this.props.generateSnaphostInFirestore();
      }
    });
  }

  // A rather hacky solution that will be fixed once we figure out a way to handle routing.
  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.user.token) {
      nextProps.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'SignIn' }),
          ]
        })
      );
    }
  }

  componentWillUnmount() {
    this.props.navigation.setParams({ signOut: this.signOut });
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
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

const mapStateToProps = ({ shoppingListStore, userStore }) => {
  const { shoppingList } = shoppingListStore;
  const { user } = userStore;
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
