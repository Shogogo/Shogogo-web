class ApplicationController < ActionController::Base
	before_filter :get_ip
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def get_ip
  	if request.remote_ip == "127.0.0.1"
  		client_ip = "8.8.8.8"
  	else 
  		client_ip = request.remote_ip
  	end
  	@geoinfo = User.location(client_ip)
  end
end
