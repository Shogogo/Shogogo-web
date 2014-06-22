require "#{Rails.root}/app/helpers/application_helper"
require 'json'
include ApplicationHelper

namespace :artists do

  desc "Populate our database with all artist info from SeatGeek"
  task :fetch_all_artists => :environment do
    Artist.seed_from_seatgeek
  end
end

namespace :events do

  desc "Fetch event IDs by favorite artist IDs and populate database"
  task :fetch_all_events => :environment do
  	Event.fetch_all_events
  end

  desc "Update remaining ticket count for all events in database"
  task :update_tickets_left => :environment do
    Event.update_tickets_left
  end

  desc "Purge all past events"
  task :purge_past_events => :environment do
    past_events = Event.where("datetime_local < ?", DateTime.now)
    past_events.destroy_all
  end

  desc "Purge all sold out events"
  task :purge_sold_out_events => :environment do
    sold_out_events = Event.where(tickets_left: 0)
    sold_out_events.destroy_all
  end

end

namespace :notifications do

  desc "Populate notifications table with upcoming events that users are interested in"
  task :populate_notifications => :environment do
    Notification.populate_notifications
  end

  desc "Send daily SMS notifications to users about upcoming shows"
  task :send_sms => :environment do
    Notification.send_notifications
  end

end

namespace :users do

  desc "Purge all guest information (users where guest attribute is true)"
  task :purge_all_guests => :environment do
    guests = User.where(guest: true)
    guests.destroy_all
  end

end