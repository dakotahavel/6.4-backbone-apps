var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore')

var models = require('./models/bookmark');
var views = require('./views/bookmark')


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
    , 'tag/:tags' : 'showTagSelected'
  }

  , initialize: function(){
    this.bookmarks = new models.BookmarkCollection();
    this.bookmark = new models.Bookmark();
    this.bookmarks.fetch();


  }
  , index: function(){

    var showForm = new views.FormView({collection: this.bookmarks, model: this.bookmark});
    $('.form').html(showForm.render().$el);

    var showTags = new views.TagsListView({collection: this.bookmarks, model: this.bookmark});
    $('.tag-list').html(showTags.render().el)

    this.bookmarks.fetch();
  }
  , showTagSelected: function(tags){
    $('.url-list').html('');

    var tagArray = this.bookmarks.where({tags:tags});

    _.each(tagArray, function(element){
      var listTag = new views.URLListView({model: element})
      $('.url-list').append(listTag.render().el);
    });
  }





});

var appRouter = new AppRouter();

module.exports = appRouter;

// index: function(){
//    new views.ListView({template: '../templates/tags.hbs'}) ;
