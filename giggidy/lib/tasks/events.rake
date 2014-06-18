require "#{Rails.root}/app/helpers/application_helper"
include ApplicationHelper

namespace :events do

  desc "Fetch events by artist ID"
  task :fetch_by_artist => :environment do
  	Event.fetch_by_artists
  end

  desc "Send SMS to user"
  task :send_sms => :environment do
    ApplicationHelper.send_sms(user_phone_number, message)
  end

end

