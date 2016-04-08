import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  favoriteList: Ember.computed('items', function() {
    return this.get('items');
  }),
  add(item) {
    this.get('items').pushObject(item);
  },
});
