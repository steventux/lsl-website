require File.expand_path(File.dirname(__FILE__) + '/../../test_config.rb')

describe "ContentsController" do
  
  describe "GET to index" do
  
    before do
      @contents = []
      3.times { @contents << Content.make! }
      get '/contents/'
    end

    it "should return all content" do
      assert_match @contents.first.title, last_response.body
      assert_match @contents.second.title, last_response.body
      assert_match @contents.third.title, last_response.body
    end
 
  end
  
  describe "GET to show" do
  
    before do
      @content = Content.make!
      get "/contents/show/#{@content.to_param}"
    end

    it "should display the specified content" do
      assert_match @content.title, last_response.body
    end
  
  end
  
#  describe "GET to show with path" do
#  
#    before do
#      @content = Content.make!
#      debugger
#      get "/contents/show#{@content.path}"
#    end

#    it "should display the specified content" do
#      debugger
#      assert_match @content.title, last_response.body
#    end
#  
#  end
  
end
