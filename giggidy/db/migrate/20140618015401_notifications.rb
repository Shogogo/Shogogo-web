class Notifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.string :type
      t.datetime :datetime_sent
      t.belongs_to :user
      t.belongs_to :event

      t.timestamps
    end
  end
end
