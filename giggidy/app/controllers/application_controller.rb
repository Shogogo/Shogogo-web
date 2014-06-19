class ApplicationController < ActionController::Base
  protect_from_forgery
  def user_is_defined?
    !!session[:user_id] ||
    !!session[:guest_id]
  end
end
