if (typeof console == 'undefined') {
  console = { log : function(msg) { 
    /* 
      // Bring the noise... 
      alert(msg) 
    */ 
  } }
}

define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, Router) {
  
  var router;
  
  var initialize = function() {
    router = Router.initialize();
  }
  
  return {
    router : router,
    initialize: initialize
  };
  
});
