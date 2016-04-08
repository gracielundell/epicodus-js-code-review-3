import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question = params[0];

  if (question.get('answers').get('length') >= 1) {
    return Ember.String.htmlSafe(question.get('answers').get('length') + ' <i class="fa fa-comment-o"></i>');
  }
}

export default Ember.Helper.helper(questionPopularity);
