class Artist < ActiveRecord::Base
	validates :name, presence: true
	validates :seatgeek_id, presence: true
	
	has_many :artist_events
	has_many :events, through: :artist_events
end

