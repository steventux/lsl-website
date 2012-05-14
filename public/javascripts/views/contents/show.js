// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'models/content',
  'text!templates/contents/show.html'
], function($, _, Backbone, Content, contentTemplate){

  var ContentView = Backbone.View.extend({
   
    el : "#content",
    
    initialize : function() {
      _.bindAll(this, 'render');
      this.model = new Content({ path: this.options.path});
      this.model.fetch({success : this.render});      
    },
    
    render : function() {
      $(this.el).html(
        _.template(contentTemplate, this.model.attributes)
      ); 
      return this;
    }
    
  });
  return ContentView;
  
});
