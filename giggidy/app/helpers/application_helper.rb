module ApplicationHelper

  def send_sms(user_phone_number, message)
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = ENV['TWILIO_AUTH_TOKEN']
   
    @twilio_client = Twilio::REST::Client.new account_sid, auth_token
   
    @twilio_client.account.sms.messages.create(
      :from => ENV['TWILIO_PHONE_NUMBER'],
      :to => user_phone_number,
      :body => message
    )
  end

end
