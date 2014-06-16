class UsersController < ApplicationController
  def index
  end

  def create
    @user = User.new(user_params)
    @user.password = user_params[:password]
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    end
  end

  def login
    @user = User.find_by_username(user_params[:username])
    if @user.password_digest = user_params[:password]
      session[:user_id] = @user.id
    end
    redirect_to root_path
  end

  def logout
    @user = User.find(session[:user_id])
    reset_session
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:username, 
                                 :password, 
                                 :first_name, 
                                 :last_name, 
                                 :email, 
                                 :latitude, 
                                 :longitude, 
                                 :phone_number, 
                                 :wants_email, 
                                 :wants_text)
  end

end