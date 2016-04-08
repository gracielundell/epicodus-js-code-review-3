import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswers: Ember.inject.service(),
  actions: {
    addToFavorites(item) {
      this.get('favoriteAnswers').add(item);
    }
  }
});
