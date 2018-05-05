import BaseModel from '../base';

class House extends BaseModel {
  constructor(id, name, users, shoppingList) {
    super(id, name);

    this.users = users;
    this.shoppingList = this.shoppingList;
  }
}

export default House;
