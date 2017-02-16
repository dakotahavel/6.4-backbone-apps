var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/form');
var models = require('./models/contact');

var AppRouter = Backbone.Router.extend({

  initialize: function(){
    var contacts = new models.ContactCollection();
    var contact = new models.Contact({collection: contacts});

    var showForm = new views.FormView({collection: contacts});
    $('.form').html(showForm.render().$el);

    contacts.fetch()
  }

});

var appRouter = new AppRouter();

module.exports = appRouter;
