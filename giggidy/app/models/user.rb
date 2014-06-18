class User < ActiveRecord::Base
	has_many :favorites
  has_many :artists, through: :favorites
  has_many :events, through: :artists
  has_many :notifications
	reverse_geocoded_by :latitude, :longitude
	after_validation :geocode
  
  has_secure_password

  validates_presence_of :phone_number, :password_digest, :name, unless: :guest?
  validates_uniqueness_of :phone_number, allow_blank: true
	validates :latitude, :longitude, presence: true
  validates_format_of :phone_number, :with => /\A\d{11}\z/, message: "Only numbers allowed, i.e. 5551234567"

  def self.new_guest
    new { |u| u.guest = true }
  end
  
  def name
    guest ? "Guest" : phone_number
  end
  
  def move_to(user)
    tasks.update_all(user_id: user.id)
  end
end