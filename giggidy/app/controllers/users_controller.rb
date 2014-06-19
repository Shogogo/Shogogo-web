class UsersController < ApplicationController
  include ApplicationHelper
  def new
    @user = User.new
    render :partial => 'phone_form'
  end

  def create
    @user = User.find(session[:guest_id])
    @user.update(user_params)
    send_sms(params[:user][:phone_number], "Thank you for using Shogogo!")
    #if receive a response render success message
      render :json => { :status => 'ok', :message => 'Success!'}
      flash[:notice] = "Successfully registered."
    # else
    #   render :partial => 'phone_form'
    # end
  end

  private

  def user_params
    params.require(:user).permit(:phone_number, :password, :name)
  end
end