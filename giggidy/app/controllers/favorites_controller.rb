class FavoritesController < ApplicationController
  def index
    @lat_lon = get_user_ip
    if session[:user_id]
      @user = User.find(session[:user_id])
      @artists = @user.artists
      render 'with_favorites'
    else
      @user = User.create(guest: true)
      @user.password = "guest"
      @user.password_confirmation = "guest"
      @user.latitude = @lat_lon.first
      @user.longitude = @lat_lon.last
      @user.save
      session[:user_id] = @user.id
    end
  end

  def create
    @user = User.find(session[:user_id])
    artist = Artist.find_or_initialize_by(seatgeek_id: params[:favorite][:seatgeek_id])
    artist.update(image_url_small: params[:favorite][:image_url_small])
    @favorite = Favorite.create(user: @user, artist: artist)
    # flash[:notice] = "Artist saved!"
    render :json => { :success => "success", :status_code => "200", :id => @favorite.id }
  end

  def destroy
    Favorite.find(params[:id]).destroy
    render :json => { :success => "success", :status_code => "200" }
  end

  private

  def favorite_params
    params.require(:favorite).permit(:name, :seatgeek_id, :image_url_small)
  end
end