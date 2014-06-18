class FavoritesController < ApplicationController
  def index
    get_user_ip
  end

  def create
    if user_is_defined?
      @favorite = Favorite.create(favorite_params)
    else
      @user = User.new_guest
      @user.save
      session[:guest_id] = @user.id 
      @user.build_favorite(favorite_params)
    end
  end

  def destroy
  end

  private

  def get_user_ip
    if request.remote_ip == "127.0.0.1"
      client_ip = "8.8.8.8"
    else 
      client_ip = request.remote_ip
    end
    @geoinfo = Geocoder.coordinates(client_ip)
  end

  def favorite_params
  end

end