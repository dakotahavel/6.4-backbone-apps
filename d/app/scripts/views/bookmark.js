var Backbone = require('backbone');
var $ = require('jquery');

var formTemplate = require('../../templates/form_template.hbs');
var tagTemplate = require('../../templates/tags_item_template.hbs');
var urlItemTemplate = require('../../templates/urls_item_template.hbs');

var FormView = Backbone.View.extend({
  tagName: 'form'
  , className: 'bookmark-form'
  , events: {
    'submit': 'addBookmark'
  }
  , template: formTemplate
  , render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
  , addBookmark: function(e){
    e.preventDefault();
    var $title = $('#title');
    var $url = $('#url');
    var $tags = $('#tags');
    this.collection.create({
      url: $url.val()
      , title: $title.val()
      , tags: $tags.val()
    })
    $url.val('');
    $title.val('');
    $tags.val('');
  }
});

var TagsListView = Backbone.View.extend({
  tagName: 'ul'
  , className: 'list-group'
  , initialize: function(){
    this.listenTo(this.collection, 'add', this.addTag)
  }
  , render: function(){
    return this;
  }
  , addTag: function(bookmark){
    var listItem = new TagsItemView({model: bookmark});
    this.$el.append(listItem.render().el);
  }
});


var TagsItemView = Backbone.View.extend({
  tagName: 'li'
  , className: 'list-group-item'
  , template: tagTemplate
  , render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

var URLListView = Backbone.View.extend({
  className: 'well',
  template: urlItemTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

module.exports = {
  FormView : FormView
  , TagsListView : TagsListView
  , TagsItemView : TagsItemView
  , URLListView : URLListView

}


// var BookmarkModel = Backbone.Model.extend({
//  idAttribute: '_id',
//  defaults:{
//    title: 'title',
//    tags: new TagCollection
//  },
//  toJSON: function(){
//    var tagData = this.get('tags').toJSON();
//    this.set('tags', tagData);
//    return Backbone.Model.prototype.toJSON.call(this);
//  }
// });
//
// var BookmarkCollection = Backbone.Collection.extend({
//  model: BookmarkModel,
//  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mikobookmarks',
//  parse: function(data){
//    return data.map(function(bookmark){
//      bookmark.tags = new TagCollection(bookmark.tags);
//    })
//  }
// });
//
// var TagCollection = Backbone.Collection.extend({
//  model: Backbone.Model,
// });

// goes under ListView in viewsinitialize: function(config){
//    this.template = require(config.template);
//  }
