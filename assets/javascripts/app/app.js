require('jquery');
require('handlebars');
require('ember');
require('ember-data');

App = Ember.Application.create({
	version: '0.1.1',
	rootElement: '#application-wrap'
});

//require('models');
//require('views');
//require('controllers/application_controller');
//require('routes');

require('test');
test("holi!");