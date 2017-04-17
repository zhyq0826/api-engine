import Ember from 'ember';
import {projects, orgs} from '../data/main';

export default Ember.Route.extend({
    model(param){
        return {
            'projects': projects[param.org] || [],
            'orgName': param.org
        }
    }
});
