import Ember from 'ember';

export default Ember.Component.extend({
  bestAnswer: false,
  // add service to send favorited answers into array, display on favorite route
  favoriteAnswers: Ember.inject.service(),
  actions: {
    addToFavorites(item) {
      this.set('bestAnswer', true);
      this.get('favoriteAnswers').add(item);
      this.sendAction('addToFavorites', item);
      // send item(answer) into favorites pg
    },
  },
});
