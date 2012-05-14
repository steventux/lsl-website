// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/main'
], function($, _, Backbone, MainView ){
    
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      ':path': 'content'
    },
    
    content : function (path) {
      new MainView({ path: path });
    },
    
    defaultAction : function(){
      // We have no matching route, lets display the home page
      new MainView({ path: "/" });
    }
  });

  var initialize = function(){
    var app_router = new AppRouter();
    Backbone.history.start({pushState: true});
    return app_router;
  };
  return {
    initialize: initialize
  };
});
