define([
  'jquery',
  'underscore',
  'backbone',
  'models/content'
], function($, _, Backbone, Content){
  
  var Contents = Backbone.Collection.extend({
    
    model: Content,
    url: "/contents"
    
  });

  return new Contents;
});
