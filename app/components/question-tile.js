// info gotten from update-question.js

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(question, params) {
      this.sendAction('edit', question, params);
      //send to index.js to edit posted q's
    },
  }
});
