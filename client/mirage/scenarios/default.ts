import { Server } from 'ember-cli-mirage';

export default function(server: Server) {

  server.createList('topic', 100);

}
