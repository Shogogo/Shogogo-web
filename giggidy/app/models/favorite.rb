require 'open-uri'
require 'json'

class Favorite < ActiveRecord::Base
	belongs_to :user
	validates :user_id, presence: true
	validates :seatgeek_artist_id, presence: true

	def self.fetch_user_artist_ids(user_id)
		#Will fetch all the users favorite artists event
		User.find(user_id).favorites.pluck(:seatgeek_artist_id)
	end		

	def self.fetch_user_events(artist_ids)
		#Will fetch all the users favorite artists events
		artist_ids.each do artist_id 
			Event.fetch_artist_events(artist_id)
		end
	end

	def self.fetch_event(long_lat)
		JSON.parse(open("http://api.seatgeek.com/2/events?performers.id=#{artist_id}").read)	 
	end

	def self.notify_users
    users = User.find(user_ids)
	end

end

