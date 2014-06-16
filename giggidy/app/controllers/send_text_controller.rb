class SendTextController < ApplicationController
  def index
  end

  def send_sms(user_phone_number, message)
    twilio_sid = ENV['twilio_account_sid']
    twilio_token = ENV['twilio_auth_token']
 
    @twilio_client = Twilio::REST::Client.new twilio_sid, twilio_token
 
    @twilio_client.account.sms.messages.create(
      :from => ENV['twilio_phone_number'],
      :to => user_phone_number,
      :body => message
    )
  end
end