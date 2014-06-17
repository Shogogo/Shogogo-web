module ApplicationHelper
  def send_sms(user_phone_number, message)
    account_sid = TWILIO_ACCOUNT_SID 
    auth_token = TWILIO_AUTH_TOKEN 
   
    @twilio_client = Twilio::REST::Client.new account_sid, auth_token
   
    @twilio_client.account.sms.messages.create(
      :from => TWILIO_PHONE_NUMBER,
      :to => user_phone_number,
      :body => message
    )
  end

  def read_sms
    account_sid = TWILIO_ACCOUNT_SID 
    auth_token = TWILIO_AUTH_TOKEN 

    @client = Twilio::REST::Client.new account_sid, auth_token

    @client.account.messages.list.each do |message|
      puts message.body
    end
  end

end
