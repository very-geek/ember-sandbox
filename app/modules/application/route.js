import Route from 'ember-route'
import inject from 'ember-service/inject'
import { isNone } from 'ember-utils'
import get from 'ember-metal/get'
import RSVP from 'rsvp'
import { later } from 'ember-runloop'

export default Route.extend({
  ajax: inject(),

  model() {
    return new RSVP.Promise((resolve) => later(() => resolve(), 3000))
  },

  setupController(controller) {
    this._super(...arguments)
    if (isNone(get(this, 'ajax.headers.Authorization'))) {
      controller.set('remindAuth', '别忘了先做 OAuth 鉴权哦，否则每小时只能请求 60 次呢～')
    }
  }
})
