require "#{Rails.root}/app/helpers/application_helper"
require 'json'
include ApplicationHelper

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

  desc "Send SMS to user"
  task :send_sms => :environment do
    ApplicationHelper.send_sms(user_phone_number, message)
  end

end