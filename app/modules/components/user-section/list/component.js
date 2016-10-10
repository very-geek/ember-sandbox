import Component from 'ember-component';
import styles from '../../../index/styles';

export default Component.extend({
  tagName: 'ul', styles,
  classNames: ['cell', '-4of12'],
  localClassNames: ['user-list']
}).reopenClass({ positionalParams: ['api'] });
