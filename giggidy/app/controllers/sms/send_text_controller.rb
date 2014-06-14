class SendTextController < ApplicationController
  def index
  end

  def send_sms
    @twilio_client = Twilio::REST::Client.new twilio_sid, twilio_token
 
    @twilio_client.account.sms.messages.create(
      :from => 'our_phone_number',
      :to => 'user_phone_number',
      :body => 'Your favorite band is in town!'
    )
  end
end