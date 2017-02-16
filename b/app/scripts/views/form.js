var Backbone = require('backbone');
var $ = require('jquery');
var formTemplate = require('../../templates/form.hbs');

var FormView = Backbone.View.extend({
  tagName: 'form'

  , template: formTemplate

  , className: 'contact-form'

  , events: {'submit' : 'postForm'
  }
  , postForm: function(e){
    e.preventDefault();
    var $first = $('#first-name');
    var $last = $('#last-name');
    var $address = $('#address');
    var $email = $('#email');
    console.log(this.collection);
    this.collection.create({first: $first.val(), last: $last.val(), address: $address.val(), email: $email.val()});
  }
  , render: function(){
    this.$el.html(this.template);
    return this;
  }

});

module.exports = {
  FormView : FormView
}
