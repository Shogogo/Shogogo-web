class FavoritesController < ApplicationController
  def index
    get_user_ip
  end

  def create
    @favorite = Favorite.new
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
end