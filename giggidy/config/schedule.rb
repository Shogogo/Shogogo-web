
every 1.day, :at => "12:00am" do
  #query database for all bands' upcoming shows within a month
end

every 1.day, :at => "12:00pm" do
  #send out notifications to users about bands' upcoming shows
  rake "notifications:send_sms"
end

every 1.day, :at => "11:00pm" do
  #go through all events and delete expired events
  rake "events:purge_past_events"
end
