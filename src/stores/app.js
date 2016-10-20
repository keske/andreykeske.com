import { observable, action } from 'mobx';

export default new class App {
  @observable isFetching = false;
};
