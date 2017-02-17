var Backbone = require('backbone');
var $ = require('jquery');

var formTemplate = require('../../templates/form_template.hbs')

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
  , addBookmark: function(){
    this.collection.create({
      url: $('#url').val()
      , title: $('#title').val()
      , tags: $('#tags').val()

    })
  }

});

module.exports = {
  FormView : FormView
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
