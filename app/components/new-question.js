import Ember from 'ember';

export default Ember.Component.extend({
  questionForm: false,
  actions: {
    questionFormShow() {
      this.set('questionForm', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        question: this.get('question') ? this.get('question') : "",
        notes: this.get('notes') ? this.get('notes') : ""
      };
      this.set('questionForm', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
