import Ember from 'ember';

export default Ember.Component.extend({
  // computed property to combine user and question
  fullQuestioner: Ember.computed('question.author', 'question.title', function() {
    return this.get('question.author') + ' asks: ' + '"' + this.get('question.title') + '"';
  }),

  actions: {
    edit(question, params) {
      this.sendAction('edit', question, params);
      //send to index.js to edit posted q's
    },

  }
});
