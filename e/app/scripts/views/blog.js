var Backbone = require('backbone');
var $ = require('jquery');

var itemTemplate = require('../../templates/post_list_template.hbs');

var PostListView = Backbone.View.extend({
  tagName: 'ul'
  , className: 'list-group'
  , initialize: function(){
    this.listenTo(this.collection, 'add', this.addPost)
  }
  , addPost: function(post){
    var listItem = new PostItemView({model: post});
    this.$el.prepend(listItem.render().el);
  }
});


var PostItemView = Backbone.View.extend({
  tagName: 'li'
  , className: 'list-group-item'
  , template: itemTemplate
  , initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);

  }
  , render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    this.$el.find('.edit-form').hide();
    return this;
  }
  , events: {
    'click .delete-btn': 'removePost'
    , 'click .edit-btn': 'showEdit'
    , 'submit .edit-form' : 'updatePost'
  }
  , removePost: function(){
    this.model.destroy();
  }
  , showEdit: function(){
    this.$('.edit-form').toggle('show')
  }
  , updatePost: function(e){
    e.preventDefault();
    this.model.set({
      title: this.$el.find('.edit-title').val()
       , body: this.$el.find('.edit-body').val()
    });
    this.model.save();
  }
});

module.exports = {
  PostListView:PostListView
  , PostItemView:PostItemView
}
