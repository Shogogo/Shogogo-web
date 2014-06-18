class Artist < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :favorites
  has_many :events
  
  accepts_nested_attributes_for :events, allow_destroy: true

  validates :name, :seatgeek_id, presence: true, uniqueness: true
end