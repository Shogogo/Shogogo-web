require 'open-uri'

class Event < ActiveRecord::Base
	belongs_to :artist
	has_many :notifications
	has_many :users, through: :artist

	validates :name, :datetime_local, :latitude, :longitude, presence: true
	validates :ticket_url, :seatgeek_id, presence: true, uniqueness: true

	def self.fetch_all_events
		artist_ids = Artist.pluck(:seatgeek_id).uniq
		artist_ids.each do |artist_id|
			results = fetch_artist_events(artist_id)
			insert_events(artist_id, results)
		end
	end

	private
	
	def self.fetch_artist_events(artist_id)
		response = Net::HTTP.get(URI.parse("http://api.seatgeek.com/2/events?performers.id=#{artist_id}"))
		JSON.parse(response) 
	end

	def self.insert_events(artist_id, results)
		results['events'].each do |event|
			Event.first_or_create(name: event['title'], 
									 ticket_url: event['url'],
									 datetime_local: event['datetime_local'],
									 latitude: event['venue']['location']['lat'],
									 longitude: event['venue']['location']['lon'],
									 seatgeek_id: event['id'],
									 artist_id: artist_id)
		end
	end

end