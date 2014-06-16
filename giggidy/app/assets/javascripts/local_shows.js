var LocalShows = function(){
};

LocalShows.prototype.getArtistName = function() {
    var artistName = $("#search_box").val();
    return artistName;
};

SearchBox.prototype.preparedLocalShowsQuery = function(artistName) {
    var words = artistName.replace(/\./g,'').split(' ');
    var preparedAristName = words.join('-').toLowerCase();
    var user_ip = $.getJSON("http://smart-ip.net/geoip-json?callback=?", function(data){
        return data.host;
    });
    return 'http://api.seatgeek.com/2/events?geoip='+ user_ip + '&range=10mi&performers.slug=' + preparedAristName;
};

SearchBox.prototype.parseLocalShows = function(artistInfo) {
    var localShows = artistInfo.events //array of local shows
    var parsedLocalShows = []
    for (var i=0; i<localShows.length; i++) {
        parsedLocalShows.push({
            "event_name": localShows[i].title,
            "venue": localShows[i].venue.name,
            "event_time": localShows[i].datetime_local,
            "lowestPrice": localShows[i].stats.lowest_price,
            "but_tix_url": localShows[i].url
        })
    }
    return parsedLocalShows;
};


