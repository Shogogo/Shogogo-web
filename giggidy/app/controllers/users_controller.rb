class UsersController < ApplicationController
  protect_from_forgery except: :create

  def index
  end

  def new
    @user = User.new
    render :partial => 'phone_form'
  end

  def create

    
    p user_params

  
    # p @user.phone_number

    # @user = User.new(user_params)
    # @user.password = user_params[:password]
    # if @user.save
    #   session[:user_id] = @user.id
    #   redirect_to root_path
    # end
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

  # def phone_params
  #   params.require(:phone_number).permit!
  # end


  def user_params
    params.require(:user).permit(
                                 :phone_number)
                            
  end

end