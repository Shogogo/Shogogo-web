class Artists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.integer :seatgeek_id

      t.timestamps
    end
  end
end
