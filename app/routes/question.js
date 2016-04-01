import Ember from 'ember';

export default Ember.Route.extend({
  model(params, params.question_id) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    var newAnswer = this.store.createRecord('answer', params);
    var question = params.question;
    post.get('answers').addObject(newComment);
    newAnswer.save().then(function() {
      return question.save();
    });
    this.transitionTo('question', params.question);
  }
});
