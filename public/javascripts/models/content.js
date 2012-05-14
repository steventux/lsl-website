define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var Content = Backbone.Model.extend({
    
    urlRoot: "/contents",

    url: function() {
      return this.urlRoot + "/show/" + this.get("path");
    },
    
    toJSON: function() {
      return { "content" : this.attributes }
    },
    
    defaults: {
      title: "Default content title",
      body: "Blah blah bleh bleh.",
      path: null
    }

  });
  return Content;

});
