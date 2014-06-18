class Notifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.string :notification_type, null: false
      t.datetime :datetime_sent, null: false
      t.belongs_to :user, null: false
      t.belongs_to :event, null: false

      t.timestamps
    end
  end
end
