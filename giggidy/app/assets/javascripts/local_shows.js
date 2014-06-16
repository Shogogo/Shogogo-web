var LocalShows = function(){
};

LocalShows.prototype.getArtistName = function() {
    var artistName = $("#search_box").val();
    return artistName;
};

LocalShows.prototype.preparedLocalShowsQuery = function(artistName) {
    var words = artistName.replace(/\./g,'').split(' ');
    var preparedAristName = words.join('-').toLowerCase();
    $.getJSON("http://smart-ip.net/geoip-json?callback=?", function(data){
        console.log( 'http://api.seatgeek.com/2/events?geoip='+ data.host + '&range=10mi&performers.slug=' + preparedAristName)
    });
};

LocalShows.prototype.parseLocalShows = function(artistInfo) {
    var localShows = artistInfo.events //array of local shows
    var parsedLocalShows = []
    for (var i=0; i<localShows.length; i++) {
        parsedLocalShows.push({
            "event_name": localShows[i].title,
            "venue": localShows[i].venue.name,
            "event_time": localShows[i].datetime_local,
            "tickets_left": localShows[i].stats.listing_count,
            "lowestPrice": localShows[i].stats.lowest_price,
            "but_tix_url": localShows[i].url
        })
    }
    return parsedLocalShows;
};


