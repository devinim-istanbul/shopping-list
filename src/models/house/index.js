import BaseModel from '../base';

class House extends BaseModel {
  constructor(name, users, shoppingList) {
    super(name);

    this.users = users;
    this.shoppingList = this.shoppingList;
  }
}

export default House;
