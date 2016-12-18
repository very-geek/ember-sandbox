import Component from 'ember-component'
import computed from 'ember-computed'
import get from 'ember-metal/get'

export default Component.extend({
  shouldReveal: computed('currentRouteName', function() {
    const routeName = get(this, 'currentRouteName')
    return !(routeName == 'loading' || routeName == 'index')
  }),
}).reopenClass({ positionalParams: ['currentRouteName'] })
