class UsersController < ApplicationController
  include ApplicationHelper
  def new
    render :partial => 'register_form'
  end

  def create
    @user = User.find(session[:user_id])
    @user.update(phone_number: params[:user][:phone_number], name: params[:user][:name])
    @user.password = params[:user][:password]
    @user.password_confirmation = params[:user][:password]
    @user.guest = false
    @user.save
    render :json => { :status => 'ok', :message => 'Success!'}
    flash[:notice] = "Successfully registered."
    # send_sms(params[:user][:phone_number], "Thank you for using Shogogo!")
    #if receive a response render success message
      
    # else
    #   render :partial => 'phone_form'
    # end
  end

  private

  def user_params
    params.require(:user).permit(:phone_number, :password, :name)
  end
end