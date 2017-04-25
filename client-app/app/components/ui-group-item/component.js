import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['cc-group-item'],
    actions: {
        toggleContent(){
            this.$('.js-content').toggle();
        }
    }
});
