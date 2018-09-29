import React from 'react';
import { View, AppState } from 'react-native';
import { connect } from 'react-redux';
import ShoppingList from './shopping-list';
import Header from './shopping-list/Header';

import {
  loadShoppinglistEventsFromFirestore,
  onIncrement,
  onDecrement,
  onRemoveItem,
  onToggle,
  generateSnaphostInFirestore,
  signOut
} from '../../redux/actions';

class ListScreen extends React.Component {
  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.props.loadShoppinglistEventsFromFirestore();
  }

  componentDidMount() {
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

  render() {
    return (
      <View style={styles.container}>
        <Header
          rightAction={() => {
            this.props.signOut();
          }}
        />
        <View style={styles.innerContainer}>
          <ShoppingList
            itemProps={{
              onIncrement: this.props.onIncrement,
              onDecrement: this.props.onDecrement,
              onRemoveItem: this.props.onRemoveItem,
              onToggle: this.props.onToggle
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
    flex: 1
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

export default connect(
  mapStateToProps,
  {
    loadShoppinglistEventsFromFirestore,
    onIncrement,
    onDecrement,
    onRemoveItem,
    onToggle,
    generateSnaphostInFirestore,
    signOut
  }
)(ListScreen);
