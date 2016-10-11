import Route from 'ember-route';
import inject from 'ember-service/inject';
import { isNone } from 'ember-utils';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { setProperties } from 'ember-metal/set';
import { reads } from 'ember-computed';

export default Route.extend({
  ajax: inject(),

  setupController(controller) {
    this._super(...arguments);
    if (isNone(get(this, 'ajax.headers.Authorization'))) {
      controller.set('remindAuth', '别忘了先做 OAuth 鉴权哦，否则每小时只能请求 60 次呢～');
    }

    setProperties(controller, {
      isShown: reads('navigation.isShown'),
      navClassNames: reads('navigation.navClassNames')
    });
  },

  renderTemplate() {
    this._super(...arguments);
    this.render('application/navigation', { into: 'application', outlet: 'navigation' });
  }
});
