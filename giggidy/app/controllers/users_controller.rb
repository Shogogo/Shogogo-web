class UsersController < ApplicationController
  include ApplicationHelper

  protect_from_forgery except: :create

  def index
  end

  def new
    @user = User.new
    render :partial => 'phone_form'
  end

  def create
    bands = params[:user][:bands]
    band_array = bands.chomp.split(',').map { |x| x.to_i }

    @user = User.new(phone_number: params[:user][:phone_number])
    
    if @user.save
      band_array.each do |band|
        @user.favorites.build(seatgeek_artist_id: band)
        @user.save
      end

      respond_to do |format|
        format.json { render :json => {:status => 'ok', :message => 'Success!'} }
        format.js { render :partial => 'verify_phone' }
      end
      
      send_sms(params[:user][:phone_number], "Thank you for using Shogogo!")
      
    else
      render :partial => 'shared/errors', :locals => { :object => @user }, :status => :unprocessable_entity
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
    params.require(:user).permit(:phone_number, :bands)                          
  end
end