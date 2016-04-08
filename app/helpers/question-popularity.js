import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question = params[0];

  if (question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i>');
  }
}

export default Ember.Helper.helper(questionPopularity);
