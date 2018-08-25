import RestAdapter from 'ember-data/adapters/rest';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

export default class ApplicationAdapter extends RestAdapter.extend(AdapterFetch) {

  host = 'http://localhost:4000';

  namespace = 'v1'

}
