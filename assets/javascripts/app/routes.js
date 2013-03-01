App.Router = Ember.Router.extend({
	// If you remove the property location, the router use the `hash` location
	location: 'history'
})

App.Router.map(function(){
	/*
	 By default (implicit behavior), you get an index resource for
	 the route `"/"`
	 In order to use a different resource for that route, we need to do
	 something like this:
	 `this.resource('my_great_resource', {path: '/'});`
	**/
	this.resource('about');
});