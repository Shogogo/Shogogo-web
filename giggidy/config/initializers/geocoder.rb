# # config/initializers/geocoder.rb
# Geocoder.configure(
#   :bing => { 
#     :api_key => 'At2fl1rfPvarpTAHir4X66beSAuEhgaJQMnD9gz0EX5_HIUgAIAv80n8QXgJonBi'
# },
#   # geocoding service (see below for supported options):
#   :lookup => :bing,

#   # IP address geocoding service (see below for supported options):
#   :ip_lookup => :freegeoip,


#   # geocoding service request timeout, in seconds (default 3):
#   :timeout => 5

# )


Geocoder.configure {
  lookup: :bing,
  key: 'At2fl1rfPvarpTAHir4X66beSAuEhgaJQMnD9gz0EX5_HIUgAIAv80n8QXgJonBi',
  cache: Rails.cache,

}