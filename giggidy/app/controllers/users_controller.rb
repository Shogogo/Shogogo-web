class UsersController < ApplicationController
  def index
  end

  private

  def user_params
    params.require(:user).permit(:username, :password_digest, :first_name, :last_name, :email, :latitude, :longitude, :phone_number, :wants_email, :wants_text)
  end

end