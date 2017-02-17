var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/bookmark');
var views = require('./views/bookmark')

var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'index'
  }

  , initialize: function(){

    var bookmarks = new models.BookmarkCollection();
    var bookmark = new models.Bookmark({collection: bookmarks});

    var showForm = new views.FormView({collection: bookmarks, model: bookmark});
    $('.form').html(showForm.render().$el);

    bookmarks.fetch();

  }


});

var appRouter = new AppRouter();

module.exports = appRouter;

// index: function(){
//    new views.ListView({template: '../templates/tags.hbs'}) ;
