import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
   updateFormShow() {
      this.set('updateForm', true);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes')
      };
      this.set('updateForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
