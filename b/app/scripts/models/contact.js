var Backbone = require('backbone');
var $ = require('jquery');

var Contact = Backbone.Model.extend({
  idAttribute: '_id'

});

var ContactCollection = Backbone.Collection.extend({
  model: Contact
  , url: 'https://tiny-lasagna-server.herokuapp.com/collections/dakotacontact'

});

module.exports = {
  Contact : Contact
  , ContactCollection : ContactCollection
}
