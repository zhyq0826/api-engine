import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('settings', function() {
    this.route('profile');
    this.route('account');
    this.route('projects');
    this.route('organizations');
  });
  this.route('organizations', function() {
    this.route('teams', {path:'/:org/teams'});
    this.route('projects', {path:'/:org/projects'});
  });
  this.route('project', {path:'/:org'}, function(){
    this.route('detail', {path:'/:project_name'}, function() {
      this.route('settings');
      this.route('api');
      this.route('group');
      this.route('api-new');
    });
  });
  this.route('project-dashboard', {path:'/:project_id/dashboard'}, function(){
    
  });
});

export default Router;
