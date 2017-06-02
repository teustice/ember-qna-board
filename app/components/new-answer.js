import Ember from 'ember';

export default Ember.Component.extend({
  answerForm: false,
  actions: {
    answerFormShow() {
      this.set('answerForm', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        answer: this.get('answer') ? this.get('answer') : "",
        question: this.get('question')
      };
      this.set('answerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
