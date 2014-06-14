class User < ActiveRecord::Base
  attr_accessible :phone_number
  
	has_secure_password
	validates :username, presence: true
	# validates :first_name, presence: true
	# validates :last_name, presence: true
	# validates :email, presence: true
		
	has_many :interests
end

