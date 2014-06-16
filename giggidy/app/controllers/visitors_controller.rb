class VisitorsController < ApplicationController
  def index

  end

  def get_session
    if Visitor::session_exists?(session.id)
      @session_details =  {sessionId: session.id,
                           lat: User.location("8.8.8.8").location.latitude,
                           lon: User.location("8.8.8.8").location.longitude,
                           preferences: Visitor::check_session(session.id).to_s.gsub(/\"/,"")}
      @session_details
    end
  end

end
