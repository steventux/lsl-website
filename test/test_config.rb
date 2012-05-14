PADRINO_ENV = 'test' unless defined?(PADRINO_ENV)
require File.expand_path('../../config/boot', __FILE__)
require File.dirname(__FILE__) + '/blueprints'
require File.dirname(__FILE__) + '/minitest_ar_helper'
require 'faker'

class MiniTest::Unit::TestCase

  include Rack::Test::Methods
  include MiniTest::Assertions::ActiveRecord
  
  DatabaseCleaner.strategy = :transaction

  def app
    ##
    # You can handle all padrino applications using instead:
    #   Padrino.application
    Laingsolutions.tap { |app|  }
  end
  
  def setup
    DatabaseCleaner.start
  end

  def teardown
    DatabaseCleaner.clean
  end
end
