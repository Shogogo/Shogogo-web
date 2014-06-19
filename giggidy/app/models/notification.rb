class Notification < ActiveRecord::Base
  belongs_to :event
  belongs_to :user

  validates :user, :event, :notification_type, :datetime_sent, presence: true

  def self.populate_notifications
    #populates notifications based on User.events where (geo radius < 100 miles)
    #AND user.notiications where(event = event.id).where(notified = false)
  end

end