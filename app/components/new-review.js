import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,

  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    saveReview() {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        item: this.get('item')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
