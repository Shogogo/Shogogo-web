class Event < ActiveRecord::Base
	validates :title, presence: true
	has_many :user_events
	has_many :users, through: :user_events
	has_many :artist_events
	has_many :artists, through: :artist_events
	belongs_to :venue
end

