class User < ActiveRecord::Base
	has_many :favorites
  has_many :artists, through: :favorites
  has_many :events, through: :artists
  has_many :notifications

	reverse_geocoded_by :latitude, :longitude
	after_validation :geocode
  
  has_secure_password

  validates_uniqueness_of :phone_number, :allow_nil => true
  validates_format_of :phone_number, :with => /\A\+1\d{10}\z/, :allow_nil => true, message: "Only numbers allowed, i.e. 5551234567"
end