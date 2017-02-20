var Backbone = require('backbone');
var $ = require('jquery');

var models = require('./models/post');
var formView = require('./views/form');
var blogView = require('./views/blog')

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  }
  , initialize: function(){
    $('.edit-form').hide();
    this.posts = new models.PostCollection();
    this.post = new models.Post({collection: this.posts})

    var form = new formView.FormView({collection: this.posts})
    $('.form').html(form.render().el)

    this.posts.fetch();
  }

  , index: function(){
    var list = new blogView.PostListView({collection: this.posts, model: this.post});
    $('.blog').html(list.render().el)
  }

});

var router = new AppRouter();

module.exports = router;
