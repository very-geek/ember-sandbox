import AjaxService from 'ember-ajax/services/ajax';
import computed from 'ember-computed';
import { assign } from 'ember-platform';
import get from 'ember-metal/get';

export default AjaxService.extend({
  host: 'https://api.github.com',

  headers: computed({
    get() {
      const token = window.localStorage.getItem('github_api_oauth_token');
      return token ? { 'Authorization': `token ${token}` } : {};
    },
    set(hash) {
      return assign(get(this, 'headers'), hash);
    }
  })
});
