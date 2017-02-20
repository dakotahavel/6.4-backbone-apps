var Backbone = require('backbone');
var $ = require('jquery');

var Bookmark = Backbone.Model.extend({
  idAttribute: '_id'

})

var BookmarkCollection = Backbone.Collection.extend({
  model: Bookmark
  , url: 'https://tiny-lasagna-server.herokuapp.com/collections/dakotabookmark'
});

module.exports= {
  Bookmark : Bookmark
  , BookmarkCollection : BookmarkCollection
}
