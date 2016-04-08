import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  favoritesList: Ember.computed('items', function() {
    return this.get('items');
  }),
});
