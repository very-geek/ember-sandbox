import Component from 'ember-component';
import set from 'ember-metal/set';

export default Component.extend({
  tagName: 'section',
  classNames: ['card'],

  currentUser: null,

  actions: {
    selectUser(user) {
      set(this, 'currentUser', user);
    },

    clearUser() {
      set(this, 'currentUser', null);
    }
  }
}).reopenClass({ positionalParams: ['users'] });
