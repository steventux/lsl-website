require File.expand_path(File.dirname(__FILE__) + '/../../test_config.rb')

describe "ContentsController" do
  before do
    get '/'
  end

  it "should return hello world text" do
    assert_match "Lorem Ipsum", last_response.body
  end
end
