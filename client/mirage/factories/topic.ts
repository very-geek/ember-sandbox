import { Factory, faker } from 'ember-cli-mirage';

import picsum from '../picsum';
import { random } from '../utils';

export default Factory.extend({

  subject(): string {
    return faker.lorem.sentence(random(3, 5));
  },

  description(): string {
    return faker.lorem.paragraph(random(1, 2));
  },

  illustration(): string {
    const w = random(231, 281);
    const h = random(119, 169);
    return picsum(w, h, { grayscale: true });
  }

});
