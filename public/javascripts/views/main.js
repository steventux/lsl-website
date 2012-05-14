// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'views/navigation/index',
  'views/contents/show'
], function($, _, Backbone, NavigationView, ContentView){

  var MainView = Backbone.View.extend({
    
    initialize : function() {
      this.navigationView = new NavigationView();
      this.contentView = new ContentView({ path: this.options.path });
    }
    
  });
  return MainView;
  
});
