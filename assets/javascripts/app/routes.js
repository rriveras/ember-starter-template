App.Router = Ember.Router.extend({
	location: 'history'
})

App.Router.map(function(){
	this.resource('dashboard');
});