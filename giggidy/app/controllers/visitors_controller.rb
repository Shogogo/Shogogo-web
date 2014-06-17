class VisitorsController < ApplicationController
  def index

  end

  def get_session
    if Visitor::session_exists?(session.id)
      @session_details =  {sessionId: session.id,
                           lat: Geocoder.coordinates("8.8.8.8")[0],
                           lon: Geocoder.coordinates("8.8.8.8")[1],
                           preferences: Visitor::check_session(session.id).to_s.gsub(/\"/,"")}
      @session_details
    end
  end

end
