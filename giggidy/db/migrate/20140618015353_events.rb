class Events < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :ticket_url, null: false, unique: true
      t.datetime :datetime_local, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :seatgeek_id, null: false, unique: true
      t.integer :tickets_left
      t.belongs_to :artist

      t.timestamps
    end
  end
end
