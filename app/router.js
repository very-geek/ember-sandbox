import Router from 'ember-router'
import config from 'ember-sandbox/config/environment'

const { locationType: location, rootURL } = config

function routes() {
  // For Github API Only
  // this.route('callback')

  // application -> children
    // loading
  this.route('parent', function() {
    this.route('child')
  })
}

export default Router.extend({location, rootURL}).map(routes)
