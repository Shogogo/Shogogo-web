module ApplicationHelper

  def send_sms(user_phone_number, message)
    account_sid = ENV['twilio_account_sid']
    auth_token = ENV['twilio_auth_token']
   
    @twilio_client = Twilio::REST::Client.new account_sid, auth_token
   
    @twilio_client.account.sms.messages.create(
      :from => ENV['twilio_phone_number'],
      :to => user_phone_number,
      :body => message
    )
  end

end
