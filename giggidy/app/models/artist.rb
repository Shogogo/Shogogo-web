class Artist < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :favorites
  has_many :events
  
  accepts_nested_attributes_for :events, allow_destroy: true

  validates :name, :seatgeek_id, presence: true, uniqueness: true

  def self.seed_from_seatgeek
    (1..30000).each do |i|
      artistInfo = fetch_artist(i)
      if artistInfo['type'] == "band"
        Artist.create(name: artistInfo['name'],
                      seatgeek_id: artistInfo['id'])
      end
    end
  end

  private

  def self.fetch_artist(artist_id)
    response = Net::HTTP.get(URI.parse("http://api.seatgeek.com/2/performers/#{artist_id}"))
    JSON.parse(response) 
  end

end