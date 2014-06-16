require 'open-uri'
require 'json'
require 'redis'

class Interest < ActiveRecord::Base
	belongs_to :user

	def self.fetch_by_artists
		artist_ids = Interest.pluck(:geekseat_artist_id).uniq
		artist_ids.map do |artist_id|
			results = JSON.parse(open("http://api.seatgeek.com/2/events?performers.id=#{artist_id}").read)
			$redis.sadd("artist_ids", artist_id) #keep it unique, suckah
			$redis.set(artist_id, results)
		end
	end

	def self.notify_users
		user_ids = Interest.where(:seatgeek_id => $redis.smembers("artist_ids")).pluck(:user_id)
    users = User.find(user_ids)
	# 	$redis.smembers("artist_ids").each do |x|
	end

	# def pp
	# 	puts JSON.pretty_generate(@url)
	# end

	# def self.pp_redis_get
	# 	$redis.smembers("artist_ids").each do |x|
	# 		pp($redis.get(x))
	# 	end
	# end

end

