var Backbone = require('backbone');
var $ = require('jquery');

var Post = Backbone.Model.extend({
  idAttribute: '_id'

});

var PostCollection = Backbone.Collection.extend({
  model: Post
  , url: 'https://tiny-lasagna-server.herokuapp.com/collections/dakotapost'
  , initialize: function(){


});

module.exports = {
  Post : Post
  , PostCollection : PostCollection
}
