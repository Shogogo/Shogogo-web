class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def user_is_defined?
    !!session[:user_id] ||
    !!session[:guest_id]
  end

  def get_user_ip
    if request.remote_ip == "127.0.0.1"
      client_ip = "172.254.25.12"
    else 
      client_ip = request.remote_ip
    end
    @geoinfo = Geocoder.coordinates(client_ip)
  end
end
