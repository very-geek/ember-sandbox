import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // 仅用作 OAuth 鉴权服务
  this.route('callback');
});

export default Router;
