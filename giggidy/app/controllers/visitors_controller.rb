class VisitorsController < ApplicationController
  def index

  end

  def get_session
    if Visitor::session_exists?(session.id)
      @session_details =  {sessionId: session.id,lat: User.location("8.8.8.8").location.latitude,lon: User.location("8.8.8.8").location.longitude, preferences: Visitor::check_session(session.id).to_s.gsub(/\"/,"") }
      @session_details
      #puts "session: #{@session_details}"
      #formulate and return a pretty json object with session, [geoip city], [preferences]
      #for users that have not yet created accounts.
    end
  end

end


#check if new user

#if returning, get preferenecs, set @user

#on select preferences, update user or create and update.
