import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('team', function() {
    this.route('project', {path: '/:project_name'});
  });
  this.route('teams');
  this.route('settings');
  this.route('profile');
  this.route('organizations', function() {
    this.route('teams', {path:'/:org/teams'});
    this.route('projects');
  });
});

export default Router;
