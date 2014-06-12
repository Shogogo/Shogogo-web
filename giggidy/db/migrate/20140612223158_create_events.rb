class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.string :url
      t.datetime :datetime_local
      t.integer :venue_id
    end
  end
end
