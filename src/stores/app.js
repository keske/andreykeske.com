import { observable, action } from 'mobx';

export default new class App {
  @observable isFetching = false;

  @observable type = 'all';

  @action changeType(type) {
    this.type = type;
  }
};
