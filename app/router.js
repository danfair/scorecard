import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('rooms', {path: '/rooms'}, function() {
    this.resource('room', {path: '/:roomId'}, function() {
      this.resource('roomAdmin', {path: '/:adminId'});
    });
  });
});

export default Router;
