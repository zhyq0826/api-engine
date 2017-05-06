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
  this.route('project', {path:'/:org'}, function() {
    this.route('workspace');
    this.route('orgs');
  });
  this.route('project-dashboard', {path:'/:project_id/dashboard'}, function(){
    this.route('api-detail', {path:'/:id'});
    this.route('environment');
    this.route('new-group');
    this.route('new-model');
    this.route('new-end-point');
  });
  this.route('project-detail', {path:'/:org/:project_name'}, function() {
    this.route('settings', function() {
      this.route('options');
      this.route('trigger-url');
      this.route('webhook');
    });
    this.route('api');
    this.route('group');
    this.route('global');
    this.route('options');
    this.route('docs', function() {
      this.route('preview');
      this.route('publish');
    });
    this.route('testing');
  });
  this.route('new-workspace');
  this.route('new-organization');
  this.route('workspaces');
});

export default Router;
