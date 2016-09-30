import Route from 'ember-route';
import inject from 'ember-service/inject';

export default Route.extend({
  ajax: inject(),

  beforeModel(transition) {
    const ajax = this.get('ajax');
    ajax.host = 'https://api.github.com';

    this.remindAuth = null;
    const token = window.localStorage.getItem('github_api_oauth_token');

    if (token) {
      ajax.headers['Authorization'] = `token ${token}`;
    } else {
      this.remindAuth = '别忘了先做 OAuth 鉴权哦，否则每小时只能请求 60 次呢～';
    }
  },

  setupController(controller) {
    controller.set('remindAuth', this.remindAuth);
  }
});
