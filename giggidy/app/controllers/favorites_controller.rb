class FavoritesController < ApplicationController
  def index
    get_user_ip
    @user = User.create(guest: true)
    @user.id
    session[:guest_id] = @user.id
    @favorites = @user.favorites
  end

  def create
    @user = User.find(session[:guest_id])
    @favorite = Favorite.create(user: @user, artist: Artist.where(favorite_params).first_or_create)
    render :json => { :success => "success", :status_code => "200" }
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
    params.require(:favorite).permit(:name, :seatgeek_id)
  end
end