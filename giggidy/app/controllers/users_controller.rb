class UsersController < ApplicationController
  include ApplicationHelper
  def new
    @user = User.new
    render :partial => 'phone_form'
  end

  def create
    @user = params[:user] ? User.new(params[:user]) : User.new_guest
    if @user.save
      current_user.move_to(@user) if current_user && current_user.guest?
      session[:user_id] = @user.id  

    else
      render "new"
    end
  end

  # def create
  #   bands = params[:user][:bands]
  #   band_array = bands.chomp.split(',').map { |x| x.to_i }

  #   @user = User.new(phone_number: params[:user][:phone_number])
    
  #   if @user.save
  #     band_array.each do |band|
  #       @user.favorites.build(seatgeek_artist_id: band)
  #       @user.save
  #     end

  #     respond_to do |format|
  #       format.json { render :json => {:status => 'ok', :message => 'Success!'} }
  #       format.js { render :partial => 'verify_phone' }
  #     end
      
  #     send_sms(params[:user][:phone_number], "Thank you for using Shogogo!")
      
  #   else
  #     render :partial => 'shared/errors', :locals => { :object => @user }, :status => :unprocessable_entity
  #   end
  # end

  private

  def user_params
    params.require(:user).permit(:phone_number, :bands)
  end
end