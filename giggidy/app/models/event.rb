require 'open-uri'

class Event < ActiveRecord::Base
	belongs_to :artist
	has_many :notifications
	has_many :users, through: :artist

	validates :name, :datetime_local, :latitude, :longitude, presence: true
	validates :ticket_url, :seatgeek_id, presence: true, uniqueness: true

	def self.fetch_all_artists
		artist_ids = Favorite.pluck(:seatgeek_artist_id).uniq
		artist_ids.map do |artist_id|
			results = fetch_artist(artist_id)
#			insert_events(artist_id, results)
		end
	end
	
	def self.insert_events(artist_id, results)
		#to be rewritten without redis

		#inserts the json events object into an artist_id value
		#$redis.sadd("artist_ids", artist_id) #keep it unique, suckah
		#$redis.set(artist_id, results)
	end
	
	def self.fetch_artist_events(artist_id)
			JSON.parse(open("http://api.seatgeek.com/2/events?performers.id=#{artist_id}").read)	 
	end
end