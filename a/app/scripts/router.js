var Backbone = require('backbone');
var $ = require('jquery');

var models = require('./models/post');

var AppRouter = Backbone.Router.extend({
  initialize: function(){

    var posts = new models.PostCollection();

    posts.fetch();

  }

});

var router = new AppRouter();

module.exports = router;
