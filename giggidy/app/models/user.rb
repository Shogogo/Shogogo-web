class User < ActiveRecord::Base
	
	before_save 

	validates :phone_number, presence: true, 
	uniqueness: true,
	format: { with: /^\d{10}$/ }, message: "Only numbers allowed, i.e. 5551234567"
	
	has_many :favorites

	def self.location(ip)
		$geoloc.lookup(ip)
	end

end

