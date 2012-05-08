require File.expand_path(File.dirname(__FILE__) + '/../test_config.rb')

describe "Content Model" do
  it 'can construct a new instance' do
    @content = Content.new
    refute_nil @content
  end
  
  it "should belong to an account" do
    assert_association Content, :belongs_to, :account
  end
  
end
