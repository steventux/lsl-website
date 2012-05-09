if (typeof console == 'undefined') {
  console = {
    log : function() { } 
  }
}
// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  }
  
  
  /**
   * Override Backbone.sync to handle default Padrino routes.
   *
   */
  /*
  Backbone._sync = Backbone.sync;
  
  Backbone.sync = function(method, model, options) {
    
    Backbone._sync(method, model, options);
    
  };
  */
  
  return {
    initialize: initialize
  };
});
