import Route from 'ember-route';
import inject from 'ember-service/inject';

export default Route.extend({
  ajax: inject(),

  model() {
    return this.get('ajax').request('/users');
  }
});
