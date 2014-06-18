# config/initializers/geocoder.rb
Geocoder.configure(

  # geocoding service (see below for supported options):
  :lookup => :yandex,

  # IP address geocoding service (see below for supported options):
  :ip_lookup => :freegeoip,


  # geocoding service request timeout, in seconds (default 3):
  :timeout => 5

)
