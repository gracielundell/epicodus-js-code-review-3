import Ember from 'ember';

export default Ember.Service.extend({
  answers: [],
  answerNum: Ember.computed('answers', function() {
    return this.get('answers');
  }),
  addAnswer(answer) {
    this.get('answers').pushObject(answer);
  },
});
