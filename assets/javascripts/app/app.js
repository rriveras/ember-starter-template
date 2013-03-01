/*
	This is where we define the main dependencies via minispade
	and create the namespace of our app so we can require only this file
	to get all the things we need
*
*/

require('jquery');
require('handlebars');
require('ember');
require('ember-data');

App = Ember.Application.create({
	version: '0.1.1',
	rootElement: '#application-wrap'
});