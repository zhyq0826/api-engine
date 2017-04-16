import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['item', 'cc-project-item', 'cc-passed'],
    init(){
        this._super(...arguments);
        this.set('org_name', '');
    }
});
