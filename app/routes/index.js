// homepage

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // display question and author name
    return this.store.findAll('question');
  },
  actions: {
  save3(params) {
    // save new question
    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();
    this.transitionTo('index');
    }
  }
});
