require 'machinist/active_record'
require 'faker'

Account.blueprint do
  name { Faker::Name.first_name }
  surname { Faker::Name.last_name }
  email { Faker::Internet.email }
  password { "password" }
  password_confirmation { "password" }
  role { "admin" }
end

Content.blueprint do
  account
  path { "/#{Faker::Lorem.words(1).first}" }
  title { Faker::Lorem.sentence }
  body { Faker::Lorem.paragraph }
  status { "draft" }
  content_type { "article" }
end
