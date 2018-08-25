import { EmberTest } from 'ember-qunit-decorators/test-support';
import { suite, test } from 'qunit-decorators';

@suite('Unit | Model | topic')
export class TopicModelTest extends EmberTest {

  @test async 'it has properties'(assert: Assert) {
    let store = this.owner.lookup('service:store');
    let model = await store.createRecord('topic');

    assert.deepEqual(
      Object.keys(model.toJSON()),
      ['subject', 'description', 'illustration']
    );
  }

}
