import Model from 'ember-data/model';

import { attr } from '@ember-decorators/data';

export default class Topic extends Model {

  @attr('string') subject!: string;

  @attr('string') description!: string;

  @attr('string') illustration!: string;

}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  interface ModelRegistry {
    'topic': Topic;
  }
}
