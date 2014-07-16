class Favorite < ActiveRecord::Base
	belongs_to :user
	belongs_to :artist

	validates :artist, presence: true

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
end
