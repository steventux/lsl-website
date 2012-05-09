describe("Content model", function() {
  
  beforeEach(function() {
    loadModule("Content", "models/content")
  })
  
  it("have a title", function() {
    var content = new Content({ "title" : "You put your chocolate in my peanut butter" });
    expect(content.get("title")).toEqual("You put your chocolate in my peanut butter");
  });
  
});
