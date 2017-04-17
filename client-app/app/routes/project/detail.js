import Ember from 'ember';
import {find_project_by_name} from '../../data/main';

export default Ember.Route.extend({
    model(param, transition){
        return  find_project_by_name(transition.params.project.org, param.project_name);
    }
});
