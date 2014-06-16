require 'open-uri'
require 'json'
require 'redis'

class Favorite < ActiveRecord::Base
	belongs_to :user
	validates :user_id, presence: true
	validates :seatgeek_artist_id, presence: true


	def self.notify_users
		user_ids = Favorites.where(:seatgeek_id => $redis.smembers("artist_ids")).pluck(:user_id)
    users = User.find(user_ids)
	end

end

