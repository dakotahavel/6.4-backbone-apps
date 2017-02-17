var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/post');
var views = require('./views/post');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  }
  , initialize: function(){
    this.posts = new models.PostCollection();

  }
  , index: function(){
    var list = new views.PostListView({collection: this.posts});
    $('.blog').html(list.render().el)
    this.posts.fetch()
  }

});

var appRouter = new AppRouter();

module.exports = appRouter;
