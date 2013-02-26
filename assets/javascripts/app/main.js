App = Ember.Application.create();

App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});
App.ApplicationController = Ember.Controller.extend();


App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
});

require('test');
test("holi!");