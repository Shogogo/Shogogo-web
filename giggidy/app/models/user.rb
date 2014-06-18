class User < ActiveRecord::Base
	has_many :favorites
  has_many :artists, through: :favorites
  has_many :events, through: :artists
  has_many :notifications
  
  has_secure_password

  validates :phone_number, :name, presence: true, 
	uniqueness: true
	validates  :latitude, :longitude, presence: true
  validates_format_of :phone_number, :with => /\A\d{11}\z/, message: "Only numbers allowed, i.e. 5551234567"
end

