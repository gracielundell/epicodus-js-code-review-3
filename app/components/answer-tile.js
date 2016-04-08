import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  actions: {
    addToFavorites(item) {
      this.get('favoritesList').add(item);
    }
  }
});
