import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer1(question) {
      var params = {
        user: this.get('user'),
        answer: this.get('answer'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
    }
  }
});
