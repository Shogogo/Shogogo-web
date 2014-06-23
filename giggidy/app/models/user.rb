class User < ActiveRecord::Base
	has_many :favorites
  has_many :artists, -> { select('artists.*, favorites.id as favorite_id') }, through: :favorites
  has_many :events, through: :artists
  has_many :notifications
  
  has_secure_password

  validates_uniqueness_of :phone_number, :allow_nil => true
  validates_format_of :phone_number, :with => /\A\+1\d{10}\z/, :allow_nil => true, message: "Number must consisits of +1 followed by a 10 digit number, i.e. +15551234567"
end