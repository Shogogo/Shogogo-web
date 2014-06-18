class Events < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.integer :ticket_url
      t.datetime :datetime_local
      t.float :latitude
      t.float :longitude
      t.integer :seatgeek_id
      t.belongs_to :artist

      t.timestamps
    end
  end
end
