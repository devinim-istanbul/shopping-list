import BaseModel from '../base';

class ShoppingList extends BaseModel {
  constructor(name, items) {
    super(name);

    this.items = items;
  }
}

export default ShoppingList;
