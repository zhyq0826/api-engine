import Ember from 'ember';
import {teams} from '../../data/main';

export default Ember.Route.extend({
    cache: Ember.inject.service('request-cache'),
    model(){
        return teams;
    }
});
