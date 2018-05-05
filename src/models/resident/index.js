import BaseModel from '../base';

class Resident extends BaseModel {
  constructor(name, houseId) {
    super(name);

    this.houseId = houseId;
  }
}

export default Resident;
