class Notification < ActiveRecord::Base
  include ApplicationHelper

  belongs_to :event
  belongs_to :user

  validates :user, :event, :notification_type, :datetime_sent, presence: true

  def self.populate_notifications
    users = User.all
    users.each do |user|
      user.artists.each do |artist|
        users_events = Event.near(user, 100)
        users_events.each do |event|
          if artist.seatgeek_id == event.artist_id
            Notification.create(user_id: user.id, event_id: event.id)
          end
        end
      end
    end
  end

  def self.message_user(user_id, event_id)
    user  = User.find(user_id)
    event = Event.find(event_id)
    artist = Artist.find_by_seatgeek_id(event.artist_id)
    message = "Hey #{user.name}! #{artist} will be playing near you! Buy tickets now! #{event.ticket_url}"
    send_sms(user.phone_number, message)
  end

  def self.send_notifications
    unsent_notifications = Notification.all.where(notified: false)
    unsent_notifications.each do |notification|
      notification.message_user(notification.user_id, notification.event_id)
      notification.update_attributes(notified: true)
    end
  end

end