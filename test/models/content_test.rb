require File.expand_path(File.dirname(__FILE__) + '/../test_config.rb')

describe "Content Model" do
  it 'can construct a new instance' do
    @content = Content.new
    refute_nil @content
  end
end
