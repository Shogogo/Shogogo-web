class CreateInterests < ActiveRecord::Migration
  def change
    create_table :interests do |t|
      t.belongs_to :user, index: true
      t.integer :geekseat_artist_id
    end
  end
end
