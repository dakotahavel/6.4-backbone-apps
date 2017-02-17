var Handlebars = require('handlebars');
var Backbone = require('backbone');

var itemTemplate = require('../../templates/post_list_item_template.hbs');
var detailTemplate = require('../../templates/post_detail_template.hbs');

var PostListView = Backbone.View.extend({
  tagName: 'ul'
  , className: 'list-group'
  , initialize: function(){
    this.listenTo(this.collection, 'add', this.addPost)
  }
  , render: function(){
    return this;
  }
  , addPost: function(post){
    var listItem = new PostItemView({model: post});
    this.$el.append(listItem.render().el);
  }
});


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

var PostDetailView = Backbone.View.extend({
  className: 'detail-view'
  , template: detailTemplate
  , render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }

})





module.exports = {
  PostItemView : PostItemView
  , PostListView : PostListView
  , PostDetailView: PostDetailView
}
