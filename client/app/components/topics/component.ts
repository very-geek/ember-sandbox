import Topic from 'esc/topic/model';

import { tagName } from '@ember-decorators/component';
import Component from '@ember/component';

@tagName('ol')
export default class TopicsComponent extends Component {

  topics!: Topic[];

}
