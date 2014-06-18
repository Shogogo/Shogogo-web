require "geocoder"

class User < ActiveRecord::Base
	
	# validates :phone_number, presence: true, 
	# uniqueness: true
	# validates_format_of :phone_number, :with => /\A\d{10}\z/, message: "Only numbers allowed, i.e. 5551234567"
	
	has_many :favorites

	geocoded_by :ip_address
	after_validation :geocode
	before_save :geocode

	# geocoded_by :address
	# after_validation :geocode, :if => :address_changed?



end

