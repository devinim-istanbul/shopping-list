import BaseModel from '../base';

class ShoppingList extends BaseModel {
  constructor(id, name, items) {
    super(id, name);

    this.items = items;
  }
}

export default ShoppingList;
