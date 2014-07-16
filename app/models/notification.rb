require 'bitly'

class Notification < ActiveRecord::Base
  include ApplicationHelper

  belongs_to :event
  belongs_to :user

  validates :user, :event, presence: true

  def self.populate_notifications
    users = User.all
    users.each do |user|
      user.artists.each do |artist|
        events_near_user = Event.near(user, 100)
        events_near_user.each do |event|
          if artist.seatgeek_id == event.artist_id
            Notification.where(user_id: user.id, event_id: event.id).first_or_create
          end
        end
      end
    end
  end

  def self.message_user(user_id, event_id)
    client = Bitly.client
    user  = User.find(user_id)
    event = Event.find(event_id)
    short_url = client.shorten(event.ticket_url).short_url
    artist = Artist.find_by_seatgeek_id(event.artist_id)
    message = "#{artist.name} will be playing near you! Buy tickets now! #{short_url} - Shogogo"
    send_sms(user.phone_number, message)
  end

  def self.send_notifications
    unsent_notifications = Notification.all.where(notified: false)
    unsent_notifications.each do |notification|
      message_user(notification.user_id, notification.event_id)
      notification.update_attributes(notified: true)
    end
  end

end