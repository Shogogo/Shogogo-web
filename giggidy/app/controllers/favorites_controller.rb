class FavoritesController < ApplicationController
  def index
    get_user_ip
    @user = User.create(guest: true)
    @user.id
    session[:user_id] = @user.id
    @favorites = @user.favorites
  end

  def create
    @user = User.find(session[:user_id])
    @favorite = Favorite.create(user: @user, artist: Artist.where(favorite_params).first_or_create)
    render :json => { :success => "success", :status_code => "200", :id => @favorite.id }
  end

  def destroy
    @user = User.find(session[:user_id])
    @artist = Artist.where(favorite_params)
    p @artist.name
    p @artist.seatgeek_id
    Favorite.where(user: @user, artist: @artist).destroy
    render :json => { :success => "success", :status_code => "200" }
  end

  private
  def favorite_params
    params.require(:favorite).permit(:name, :seatgeek_id)
  end
end