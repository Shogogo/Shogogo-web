class Notification < ActiveRecord::Base
  belongs_to :event
  belongs_to :user

  validates :user, :event, :notification_type, :datetime_sent, presence: true
end