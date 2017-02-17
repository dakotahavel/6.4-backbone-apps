var Handlebars = require('handlebars')
var Backbone = require('backbone');

var itemTemplate = require('../../templates/post_list_item_template.hbs')

var PostListView = Backbone.View.extend({
  tagName: 'ul'
  , className: 'list-group'
  , render: function(){
    return this;
  }
  , addPost: function(post){
    var listItem = new PostItemView({model: post});
    this.$el.append(listItem.render().el);
  }
});

// var BookListView = Backbone.View.extend({
//   tagName: 'ul',
//   className: 'list-group',
//   initialize: function(){
//     this.listenTo(this.collection, 'add', this.addBook)
//   },
//   render: function(){
//     return this;
//   },
//   addBook: function(book){
//     var bookItem = new BookItemView({model: book});
//     this.$el.append(bookItem.render().el);
//   }
// });

var PostItemView = Backbone.View.extend({
  tagName: 'li'
  , className: 'list-group-item'
  , template: itemTemplate
  , render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

//
// var BookItemView = Backbone.View.extend({
//   tagName: 'li',
//   className: 'list-group-item',
//   template: bookListItemTemplate,
//   render: function(){
//     var renderedTemplate = this.template(this.model.toJSON());
//     this.$el.html(renderedTemplate);
//     return this;
//   }
// });



module.exports = {
  PostItemView : PostItemView
  , PostListView : PostListView
}
