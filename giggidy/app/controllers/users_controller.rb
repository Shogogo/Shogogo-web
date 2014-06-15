class UsersController < ApplicationController
  def index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password_digest, :first_name, :last_name, :email, :latitude, :longitude, :phone_number, :wants_email, :wants_text)
  end

end