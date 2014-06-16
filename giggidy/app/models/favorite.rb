require 'open-uri'
require 'json'
require 'redis'

class Favorites < ActiveRecord::Base
	belongs_to :user
	validates :user_id, presence: true
	validates :seatgeek_artist_id, presence: true


	def self.fetch_by_artists
		artist_ids = Favorites.pluck(:geekseat_artist_id).uniq
		artist_ids.map do |artist_id|
			results = JSON.parse(open("http://api.seatgeek.com/2/events?performers.id=#{artist_id}").read)
			$redis.sadd("artist_ids", artist_id) #keep it unique, suckah
			$redis.set(artist_id, results)
		end
	end

	def self.notify_users
		user_ids = Favorites.where(:seatgeek_id => $redis.smembers("artist_ids")).pluck(:user_id)
    users = User.find(user_ids)
	end

end

