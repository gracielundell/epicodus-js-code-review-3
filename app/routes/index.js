// homepage, display question and author name

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
