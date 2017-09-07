import Ember from 'ember';

export default Ember.Route.extend({
  //Always return the full list of contacts into "model" (update when there is a change in the collection)
  model()  {
    return this.store.peekAll('contact');
  }
});
