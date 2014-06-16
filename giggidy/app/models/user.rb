class User < ActiveRecord::Base

	validates :phone_number, presence: true, 
	uniqueness: true
	validates_format_of :phone_number, :with => /\A\d{10}\z/, message: "Only numbers allowed, i.e. 5551234567"
	
	has_many :favorites

	def self.location(ip)
		$geoloc.lookup(ip)
	end

end

