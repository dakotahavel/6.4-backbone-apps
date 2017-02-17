var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/post');
var views = require('./views/post');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id': 'showDetail'
  }
  , initialize: function(){
    this.posts = new models.PostCollection();
    this.post = new models.Post();

  }
  , index: function(){
    var list = new views.PostListView({collection: this.posts, model: this.post});
    $('.blog').html(list.render().el)
    this.posts.fetch()
  }
  , showDetail: function(id){
    var post = this.posts.findWhere({'_id': id});
    var detail = new views.PostDetailView({model: post});
    $('.detail').html(detail.render().el)
    this.posts.fetch()
  }

});

var appRouter = new AppRouter();

module.exports = appRouter;
