import { observable, action } from 'mobx';

// Constants
import travel from 'constants/travel';

export default new class Travel {
  @observable all = [];

  @action get() {
    this.all = travel;
  }
};
