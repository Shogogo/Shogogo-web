Geocoder.configure(ip_lookup: :maxmind_local, maxmind_local: {file: File.join('folder', 'GeoLiteCity.dat')})


Geocoder.configure(
	ip_lookup: :maxmind_local, 
	maxmind_local: 	{file: '/var/lib/GeoLite2-City.mmdb'},
  :timeout => 2,
  :cache => $redis
)