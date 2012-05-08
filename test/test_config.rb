PADRINO_ENV = 'test' unless defined?(PADRINO_ENV)
require File.expand_path('../../config/boot', __FILE__)
require File.expand_path('../minitest_ar_helper', __FILE__)

class MiniTest::Unit::TestCase

  include Rack::Test::Methods
  include MiniTest::Assertions::ActiveRecord

  def app
    ##
    # You can handle all padrino applications using instead:
    #   Padrino.application
    Laingsolutions.tap { |app|  }
  end
end
