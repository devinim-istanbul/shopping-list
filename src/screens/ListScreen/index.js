import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ShoppingList from './ShoppingList';

import { loadShoppinglistEventsFromFirestore } from '../../redux/actions';

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Shopping List'
  };

  componentDidMount() {
    this.props.loadShoppinglistEventsFromFirestore();
  }

  render() {
    return (
      <View style={styles.container}>
        <ShoppingList list={this.props.shoppingList} onAddItem={() => {}} />
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
  loadShoppinglistEventsFromFirestore
})(ListScreen);
