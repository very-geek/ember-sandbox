import { Factory, faker } from 'ember-cli-mirage';

import picsum from '../picsum';
import { random } from '../utils';

export default Factory.extend({

  subject(): string {
    return faker.lorem.sentence(random(2, 3));
  },

  description(): string {
    return faker.lorem.paragraph(random(1, 2));
  },

  illustration(): string {
    const w = random(281, 331);
    const h = random(169, 219);
    return picsum(w, h);
  }

});
