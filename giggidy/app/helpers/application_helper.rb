module ApplicationHelper

  def send_sms(user_phone_number, message)
    account_sid = 'AC49de56d245eb573da3703df2cfde338a'
    auth_token = 'c8157d475003fe875f3f3710505c95d9'
   
    @twilio_client = Twilio::REST::Client.new account_sid, auth_token
   
    @twilio_client.account.sms.messages.create(
      :from => '+19176526862',
      :to => user_phone_number,
      :body => message
    )
  end

  def receive_sms
    reply = params[:Body].downcase
    user_phone_number = params[:From]

    user = User.find_by_phone_number(user_phone_number)
    if reply == "stop"
      user.destroy
    elsif reply == "confirm"
      user.update_atrributes(wants_text: true)
    end

    redirect_to :root
  end

  def read_sms
    account_sid = ENV['twilio_account_sid']
    auth_token = ENV['twilio_auth_token']

    @client = Twilio::REST::Client.new account_sid, auth_token

    @messages = @client.account.messages.list({:to => ENV['twilio_phone_number'], :date_sent => "2014-17-06"})

    @messages.each do |message|
      puts message.body
    end
  end

end
