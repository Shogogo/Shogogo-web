class FavoritesController < ApplicationController
  def index
    get_user_ip
    if session[:user_id]
      @user = User.find(session[:user_id])
      @artists = @user.artists
    else
      @user = User.create(guest: true)
      @user.password = "guest"
      @user.password_confirmation = "guest"
      @user.save
      session[:user_id] = @user.id
    end
  end

  def create
    @user = User.find(session[:user_id])
    @favorite = Favorite.create(user: @user, artist: Artist.where(favorite_params).first_or_create)
    render :json => { :success => "success", :status_code => "200", :id => @favorite.id }
  end

  def destroy
    Favorite.find(params[:id]).destroy

    render :json => { :success => "success", :status_code => "200" }
  end

  private
  def favorite_params
    params.require(:favorite).permit(:name, :seatgeek_id)
  end
end