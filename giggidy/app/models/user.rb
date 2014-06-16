class User < ActiveRecord::Base
	has_secure_password
	# validates :first_name, presence: true
	# validates :last_name, presence: true
	# validates :email, presence: true
	validates :phone, presence: true		
	has_many :favorites

	def self.location(ip)
		$geoloc.lookup(ip)
	end

end

