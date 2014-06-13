class User < ActiveRecord::Base
	has_secure_password
	validates :username, presence: true
	validates :first_name, presence: true
	validates :last_name, presence: true
	validates :email, presence: true
		
	has_many :user_events
	has_many :events, through: :user_events
end

