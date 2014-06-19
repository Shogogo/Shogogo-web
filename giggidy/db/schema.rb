# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140618220523) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: true do |t|
    t.string   "name",            null: false
    t.integer  "seatgeek_id",     null: false
    t.string   "image_url_small"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "events", force: true do |t|
    t.string   "name",           null: false
    t.string   "ticket_url",     null: false
    t.datetime "datetime_local", null: false
    t.float    "latitude",       null: false
    t.float    "longitude",      null: false
    t.integer  "seatgeek_id",    null: false
    t.integer  "tickets_left"
    t.string   "address"
    t.integer  "artist_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "favorites", force: true do |t|
    t.integer  "artist_id",  null: false
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "notifications", force: true do |t|
    t.string   "notification_type",                 null: false
    t.datetime "datetime_sent",                     null: false
    t.boolean  "notified",          default: false
    t.integer  "user_id",                           null: false
    t.integer  "event_id",                          null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "phone_number"
    t.string   "password_digest"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "address"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "guest"
  end

end
