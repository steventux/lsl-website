require File.expand_path(File.dirname(__FILE__) + '/../test_config.rb')

describe "Content Model" do
  it 'can construct a new instance' do
    @content = Content.new
    refute_nil @content
  end
  
  it "should belong to an account" do
    assert_association Content, :belongs_to, :account
  end
  
  it "should validate presence of path" do
    assert_validates_presence_of Content, :path
  end
  
  it "should validate presence of title" do
    assert_validates_presence_of Content, :title
  end
  
  it "should validate presence of body" do
    assert_validates_presence_of Content, :body
  end
  
  it "should validate presence of content_type" do
    assert_validates_presence_of Content, :content_type
  end
  
  it "should validate presence of status" do
    assert_validates_presence_of Content, :status
  end
  
  it "should validate uniqueness of path" do
    assert_validates_uniqueness_of Content, :path
  end
  
end
