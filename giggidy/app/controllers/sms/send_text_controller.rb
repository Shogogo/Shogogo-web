class SendTextController < ApplicationController
  def index
  end

  def send_sms
    CLIENT.account.messages.create(
      :from => 'our_phone_number',
      :to => 'user_phone_number',
      :body => 'Your favorite band is in town!'
    )
  end
end