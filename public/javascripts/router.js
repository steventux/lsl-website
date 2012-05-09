// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/contents/show'
], function($, _, Backbone, MainHomeView, ContentView ){
    
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/:path': 'content'
    },
    
    content : function (content_path) {
      new ContentView({ path: content_path }).render();
    },
    
    defaultAction : function(){
      // We have no matching route, lets display the home page
      new ContentView({ path: "/" }).render();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start({pushState: true});
  };
  return {
    initialize: initialize
  };
});
