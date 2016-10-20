import { observable, action } from 'mobx';

// Constants
import works from 'constants/works';

export default new class Works {
  @observable all = [];

  @action get() {
    this.all = works;
  }
};
