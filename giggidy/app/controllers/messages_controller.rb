class MessagesController < ApplicationController
  include ApplicationHelper

  def index
  end

  def send_sms(user_phone_number, message)
    account_sid = ENV['twilio_account_sid'] 
    auth_token = ENV('twilio_auth_token') 
   
    @twilio_client = Twilio::REST::Client.new account_sid, auth_token
   
    @twilio_client.account.sms.messages.create(
      :from => 'ShoGoGo',
      :to => user_phone_number,
      :body => message
    )
  end

  def receive_sms
    p 'YOU HIT THE RECEIVE SMS PATH'
    p '****************************************'
    p params[:Body]
    p params[:From]
    p '****************************************'

    reply = params[:Body].downcase
    user_phone_number = params[:From]

    if reply == "stop"
      p "REPLY: STOP"
    else
      p "Error: Did not understand message"
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