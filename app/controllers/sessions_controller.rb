class SessionsController < ApplicationController
  def new
    render partial: "login_form"
  end

  def create
    parsed_phone = "+1" + params[:login][:phone_number]
    @user = User.find_by(phone_number: parsed_phone )
    if @user.authenticate(params[:login][:password])
      session[:user_id] = @user.id
      @artists = @user.artists
      render partial: "favorites/favorites_menu", locals: { artists: @artists }
      # flash[:notice] = "You've been logged in."
    else
      flash[:alert] = "There was a problem logging you in."
      render partial: 'login_form'
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