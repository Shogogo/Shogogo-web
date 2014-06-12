class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :image_url
      t.integer :seatgeek_id
      t.string :type
    end
  end
end
