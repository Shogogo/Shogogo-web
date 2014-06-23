class UsersController < ApplicationController
  include ApplicationHelper
  def new
    render :partial => 'register_form'
  end

  def create
    @user = User.find(session[:user_id])
    parsed_phone = "+1#{params[:user][:phone_number]}"
    @user.update(phone_number: parsed_phone, name: params[:user][:name])
    @user.password = params[:user][:password]
    @user.password_confirmation = params[:user][:password]
    @user.longitude = 40.77 
    @user.latitude = -73.98
    @user.guest = false
    
    if @user.save
      send_sms(parsed_phone, "Thank you for using Shogogo! Reply 'confirm' to verify your number or reply 'stop' to unsubscribe.")
      sleep(10) #temporary solution - need to implement client side waiting for phone validation
      render :json => { :status => 'ok', :message => 'Success!'}
    else
      render :json => { :errors => @user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:user).permit(:phone_number, :password, :name)
  end
end
