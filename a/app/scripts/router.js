var Backbone = require('backbone');
var $ = require('jquery');

var models = require('./models/post');
var views = require('./views/form');

var AppRouter = Backbone.Router.extend({
  initialize: function(){

    var posts = new models.PostCollection();
    var post = new models.Post({collection: posts})

    var form = new views.FormView({collection: posts})
    $('.form').html(form.render().el)

    posts.fetch();

  }

});

var router = new AppRouter();

module.exports = router;
