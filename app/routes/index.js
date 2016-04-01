// homepage, display question and author name

import Ember from 'ember';

var questions = [{
  title: "Why do cats meow?",
  author: "Alex Dunphey",
  notes: "More in-depth quandries about the reasons cat meow only to humans. Thesis here."
}, {
  title: "Is general relativity the answer?",
  author: "Albert Einstein",
  notes: "General relativity (GR, also known as the general theory of relativity or GTR) is the geometric theory of gravitation published by Albert Einstein in 1915 and the current description of gravitation in modern physics"
}, {
  title: "Are cows killing our planet?",
  author: "Michael Pollen",
  notes: "In-depth exploration about the effects cow farts have on greenhouse gases and what that does to the arctic."
}];


export default Ember.Route.extend({
  model() {
    return questions;
  },
});
