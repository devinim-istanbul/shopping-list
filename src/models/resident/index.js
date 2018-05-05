import BaseModel from '../base';

class Resident extends BaseModel {
  constructor(id, name, houseId) {
    super(id, name);

    this.houseId = houseId;
  }
}

export default Resident;
