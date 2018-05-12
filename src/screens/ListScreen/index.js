import React from 'react';
import { View, UIManager, LayoutAnimation } from 'react-native';
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

  componentWillUpdate() {
    if (UIManager.setLayoutAnimationEnabledExperimental)
      UIManager.setLayoutAnimationEnabledExperimental(true);
    if (this.props.shoppingList) {
      LayoutAnimation.spring();
    }
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
