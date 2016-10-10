import Component from 'ember-component';

export default Component.extend({
  classNames: ['cell', '-8of12']
}).reopenClass({ positionalParams: ['currentUser'] });
