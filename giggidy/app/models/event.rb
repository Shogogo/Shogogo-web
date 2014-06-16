require 'open-uri'
class Event < ActiveRecord::Base

	def self.fetch_all_artists
		artist_ids = Favorite.pluck(:seatgeek_artist_id).uniq
		artist_ids.map do |artist_id|
			results = fetch_artist(artist_id)
			insert_events(artist_id, results)
		end
	end
	def self.insert_events(artist_id, results)
		#inserts the json events object into an artist_id value
			$redis.sadd("artist_ids", artist_id) #keep it unique, suckah
			$redis.set(artist_id, results)
	end
	def self.fetch_artist(artist_id)
			JSON.parse(open("http://api.seatgeek.com/2/events?performers.id=#{artist_id}").read)	 
	end

	def self.build_alert_queue
		#here we traverse the Favorites table to correlate with Events and Users 
	end

end