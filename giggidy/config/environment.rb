# Load the Rails application.
require File.expand_path('../application', __FILE__)

#Twilio client.
CLIENT = Twilio::REST::Client.new do |config|
  config.twilio_account_sid = ENV['twilio_account_sid']
  config.twilio_auth_token = ENV['twilio_auth_token']
end

# Initialize the Rails application.
Rails.application.initialize!
