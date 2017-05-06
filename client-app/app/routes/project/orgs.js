import Ember from 'ember';
import {orgs} from '../../data/main';
console.log(orgs)
export default Ember.Route.extend({
    model(param){
        return orgs;
    }
});
