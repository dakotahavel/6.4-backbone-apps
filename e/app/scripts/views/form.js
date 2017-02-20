var Backbone = require('backbone');
var $ = require('jquery');
var formTemplate = require('../../templates/form_template.hbs');

var FormView = Backbone.View.extend({
  tagName: 'form'
  , template: formTemplate

  , className: 'posting-form'

  , events: {
    'submit ' : 'postForm'
    , 'click .new-btn' : 'showPostForm'

  }
  , postForm: function(e){
    e.preventDefault();
    var $title = $('#title');
    var $body = $('#body');
    console.log(this.collection);
    this.collection.create({title: $title.val(), body: $body.val()});
    $title.val('');
    $body.val('');
  }
  , render: function(){
    this.$el.html(this.template);
    return this;
  }
  , showPostForm: function(){
    $('.blog-form').toggle('show')
  }

});

module.exports = {
  FormView : FormView
}
