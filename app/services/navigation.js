import Service from 'ember-service';
import styles from '../modules/application/styles';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Service.extend({
  isShown: false,

  navClassNames: computed('isShown', function() {
    const isShown = get(this, 'isShown');
    let baseClass = styles.navigation;
    return isShown ? `${baseClass} ${styles.show}` : baseClass;
  }),

  show(context) {
    set(context || this, 'isShown', true);
  },

  hide(context) {
    set(context || this, 'isShown', false);
  },

  toggle(context) {
    if (context) context.toggleProperty('isShown')
    else this.toggleProperty('isShown');
  }
});
