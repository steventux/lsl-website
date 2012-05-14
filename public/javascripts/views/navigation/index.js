define(
  [
    'jquery', 
    'underscore',
    'backbone'
  ], 
  function($, _, Backbone) {
    var NavigationView = Backbone.View.extend({
      events : { 
        "click li a" : "navigate" 
      },
      initialize : function() {
        this.$el = $("#navigation");
      },
      navigate : function(e) {
        e.preventDefault();
        var path = $(e.currentTarget).attr("href");
        Backbone.history.navigate(path, {trigger:true});
      }
    });
    return NavigationView;
  }
);
