class CreateArtistToEvents < ActiveRecord::Migration
  def change
    create_table :artist_to_events do |t|
      t.belongs_to :artist, index: true
      t.belongs_to :event, index: true
    end
  end
end
