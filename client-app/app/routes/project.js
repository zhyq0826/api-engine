import Ember from 'ember';
import {projects, orgs} from '../data/main';

export default Ember.Route.extend({
    model(param){
        return {
            'projects': projects,
            'orgName': param.org
        }
    }
});
