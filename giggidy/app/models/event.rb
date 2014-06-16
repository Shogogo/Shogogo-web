class Event < ActiveRecord::Base

	def self.fetch_by_artists
		artist_ids = Favorites.pluck(:geekseat_artist_id).uniq
		artist_ids.map do |artist_id|
			results = JSON.parse(open("http://api.seatgeek.com/2/events?performers.id=#{artist_id}").read)
			$redis.sadd("artist_ids", artist_id) #keep it unique, suckah
			$redis.set(artist_id, results)
		end
	end
	def self.build_alert_queue
		#here we traverse the Favorites table to correlate with Events and Users 
	end

end
