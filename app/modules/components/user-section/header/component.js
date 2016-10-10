import Component from 'ember-component';

export default Component.extend({
  tagName: 'header',
  classNames: ['card-header']
}).reopenClass({ positionalParams: ['currentUser'] });
