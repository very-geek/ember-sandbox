import { computed } from '@ember-decorators/object';
import Controller from '@ember/controller';

export default class IndexController extends Controller {

  amount: number = 10;

  @computed('model', 'amount')
  get topics() {
    return this.model.slice(0, this.amount);
  }

}
