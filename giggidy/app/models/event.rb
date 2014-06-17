require 'open-uri'
class Event < ActiveRecord::Base

	def self.fetch_all_artists
    # Ask yourselves does this make any sense.  Why is a method on Event asking
    # Favorite to pluck something?  In what universe does that seem rational?
		artist_ids = Favorite.pluck(:seatgeek_artist_id).uniq
		artist_ids.map do |artist_id|
			results = fetch_artist(artist_id)
			insert_events(artist_id, results)
		end
	end

  # Uhm, so you're harvesting stuff so you can load it into redis, why use
  # ActiveRecord at all?  Come to think of it, that explains the brain damage
  # whereby a Favorite has to ask Event.fetch_artist_event instead of being
  # able to use ActiveRecord associations, you're  LITERALLY RE-INVENTING THE
  # WHEEL SO YOU CAN USE REDIS.  Why?  Why?  Why?  Why did you do this?
  #
  # What possible problem could you have had that required redis?  Did you just
  # want to try out all the buzzwords you saw on hacker news one day?  You've
  # thrown away the beauty of active record and the conveniences it could give
  # you.
  #
  # Didn't we say on day one of phase 3:
  #
  # "When someone gives you an observation, it is your obligation to hold them
  # accountable to that opinion."
  #
  # Why is redis here?
  #
  # You hurt me.  I hope you can explain this to an interviewer, or me.

	def self.insert_events(artist_id, results)
		#inserts the json events object into an artist_id value
			$redis.sadd("artist_ids", artist_id) #keep it unique, suckah
			$redis.set(artist_id, results)
	end

  # This should be in its own class.  You're parsing JSON it should be like a
  # "EventForArtistFetcher" and then, since you're not actually using Event,
  # you wouldn't have to have this method here, you could put it on somewhere
  # else....like on Favorite (wtf?!) which calls this method?  Why would a
  # model call a method on another model?  What?!
	def self.fetch_artist_events(artist_id)
			JSON.parse(open("http://api.seatgeek.com/2/events?performers.id=#{artist_id}").read)	 
	end
end
