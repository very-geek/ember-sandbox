import { faker, Server } from 'ember-cli-mirage';

faker.locale = 'zh_CN';

export default function(this: Server) {

  this.urlPrefix = 'http://localhost:4000';

  this.namespace = 'v1';

  this.timing = 500;

  this.get('/topics');

}
