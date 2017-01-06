import Route from 'ember-route'
import inject from 'ember-service/inject'
import { isNone } from 'ember-utils'
import get from 'ember-metal/get'

export default Route.extend({
  ajax: inject(),

  intl: inject(),

  activate() {
    get(this, 'intl').setLocale('en_us')
  },

  setupController(controller) {
    this._super(...arguments)
    if (isNone(get(this, 'ajax.headers.Authorization'))) {
      controller.set('remindAuth', '别忘了先做 OAuth 鉴权哦，否则每小时只能请求 60 次呢～')
    }
  }
})
