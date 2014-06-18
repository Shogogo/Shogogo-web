class Favorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.belongs_to :artists
      t.belongs_to :users

      t.timestamps
    end
  end
end
