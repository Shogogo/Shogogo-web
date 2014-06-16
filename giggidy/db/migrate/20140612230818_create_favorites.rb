class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.belongs_to :user, index: true
      t.integer :seatgeek_artist_id
    end
  end
end
