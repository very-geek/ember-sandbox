import Route from 'ember-route';
import inject from 'ember-service/inject';

export default Route.extend({
  ajax: inject(),

  beforeModel(transition) {
    const ajax = this.get('ajax');
    const { queryParams } = transition;

    if (queryParams.code) {
      ajax
        .request(`https://ember-sandbox.herokuapp.com/authenticate/${queryParams.code}`)
        .then(response => {
          ajax.headers['Authorization'] = `token ${response.token}`;
          window.localStorage.setItem('github_api_oauth_token', response.token);
          this.controllerFor('application').set('remindAuth', null);
          this.transitionTo('index');
        });
    } else {
      this.transitionTo('index');
    }
  }
});
