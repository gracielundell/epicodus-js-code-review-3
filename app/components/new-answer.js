import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer1(question) {
      var params = {
        question: question,
        user: this.get('user'),
        answer: this.get('answer'),

      };
      this.set('addNewAnswer', false);
      this.set('user', ""),
      this.set('answer', ""),
      this.sendAction('saveAnswer2', params);
    }
  }
});
