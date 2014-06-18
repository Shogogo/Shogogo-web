require "#{Rails.root}/app/helpers/application_helper"
include ApplicationHelper

namespace :events do

  desc "Fetch events by artist IDs"
  task :fetch_by_artist => :environment do
  	artist_ids = Event.fetch_by_artists
    events = Event.fetch_user_events(artist_ids)
  end

  desc "Purge all past events"
  task :purge_past_events => :environment do
    past_events = Event.where("datetime_local < ?", DateTime.now)
    past_events.destroy_all
  end

end

namespace :notifications do

  desc "Send SMS to user"
  task :send_sms => :environment do
    ApplicationHelper.send_sms(user_phone_number, message)
  end

end