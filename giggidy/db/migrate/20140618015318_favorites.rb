class Favorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.belongs_to :artist, null: false
      t.belongs_to :user

      t.timestamps
    end
  end
end