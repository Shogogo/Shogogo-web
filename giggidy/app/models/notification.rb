class Notification < ActiveRecord::Base
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

  def self.message(user_id, event_id)
    username  = User.find(user_id).name
    event = Event.find(event_id)
    artist = Artist.find_by_seatgeek_id(event.artist_id)
    "Hey #{username}! #{artist} will be playing near you! Buy tickets now! #{event.ticket_url}"
  end

end