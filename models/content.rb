class Content < ActiveRecord::Base
  belongs_to :account
  validates_presence_of :path
  validates_presence_of :title
  validates_presence_of :body

end
