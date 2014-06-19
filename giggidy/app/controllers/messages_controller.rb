class MessagesController < ApplicationController
  include ApplicationHelper

  def index
  end

  def receive_sms
    reply = params[:Body].downcase
    user_phone_number = params[:From]

    user = User.find_by_phone_number(user_phone_number)
    if reply.downcase == "stop"
      user.update_atrributes(guest: true)
    elsif reply.downcase == "confirm"
      user.update_atrributes(guest: false)
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