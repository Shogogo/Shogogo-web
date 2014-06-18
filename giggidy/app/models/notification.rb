class Notification < ActiveRecord::Base
  belongs_to :event
  belongs_to :user

  validates :user, :event, :type, :datetime_sent, presence: true
end