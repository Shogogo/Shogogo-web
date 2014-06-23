class SessionsController < ApplicationController
  def new
    @user = User.authenticate(login_params)
    if @user
      session[:user_id] = @user.id
      flash[:notice] = "You've been logged in."
    else
      flash[:alert] = "There was a problem logging you in."
    end
  end

  def destroy
    reset_session
    # flash[:notice] = "You are now logged out"
    redirect_to root_path
  end
end

def login_params
  params.require(:login).permit(:phone_number, :password)
end