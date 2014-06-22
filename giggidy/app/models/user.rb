class User < ActiveRecord::Base
	has_many :favorites
  has_many :artists, through: :favorites
  has_many :events, through: :artists
  has_many :notifications

	reverse_geocoded_by :latitude, :longitude
	after_validation :geocode
  
  has_secure_password

  validates_presence_of :phone_number, :name, unless: :guest == true
  validates_uniqueness_of :phone_number, allow_blank: true
  validates_format_of :phone_number, :with => /\A\d{10}\z/, message: "Only numbers allowed, i.e. 5551234567"
end