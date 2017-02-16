var Backbone = require('backbone');
var $ = require('jquery');

var Post = Backbone.Model.extend({
  id: '_id'
  
});

var PostCollection = Backbone.Collection.extend({
  model: Post
  , url: 'https://tiny-lasagna-server.herokuapp.com/collections/dakotapost'
  , initialize: function(){
    this.create({title: "Post Title", body: "Post Body"})
  }

});

module.exports = {
  Post : Post
  , PostCollection : PostCollection
}
