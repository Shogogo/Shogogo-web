class RemoveNotificationTypeNotifications < ActiveRecord::Migration
  def up
    remove_column :notifications, :notification_type
  end

  def down
    add_column :notifications, :notification_type, :string
  end
end
