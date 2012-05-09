describe("ContentView", function() {
  
  var contentView;
  
  beforeEach(function() {
    loadModule("ContentView", "views/contents/show");
  })
  
  describe("constructor", function() {
  
    beforeEach(function() {
      contentView = new ContentView({ path : "/something-interesting-about-computers" });
    })
  
    it("should take its path from the options hash", function() {
      expect("/something-interesting-about-computers").toEqual(contentView.options.path);
    });
    
    describe("render method", function() {
      
//      var compiledHtml,
//          renderedEventTriggered = false;
//          
//      beforeEach(function() {
//        contentView.template = "<blink><%= blinky %></blink>";
//        
//        var MockModel = Backbone.Model.extend({ 
//          defaults : { blinky : "BLINKY!!!!!" } 
//        });
//        
//        contentView.model = new MockModel();
//        
//        spyOn(contentView.$el, 'html').andCallFake(function(output) {
//          compiledHtml = output;
//        });
//        
//        contentView.bind("rendered", function() {
//          renderedEventTriggered = true;
//        });
//        // Do it.
//        contentView.render();
//      });
//      
//      it("should update the DOM via the $el.html method using the template and model attributes", function() {
//        expect("<blink>BLINKY!!!!!</blink>").toBe(compiledHtml);
//      });
//      
//      it("should trigger the rendered event", function() {
//        expect(renderedEventTriggered).toBeTruthy();
//      });
      
    });
  
  });
  
});
