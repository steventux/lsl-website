define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var Content = Backbone.Model.extend({
    
    urlRoot: "/contents",
    
    toJSON: function() {
      return { "content" : this.attributes }
    },
    
    defaults: {
      title: "Default content title",
      body: "Blah blah bleh bleh."
    }

  });
  return Content;

});
