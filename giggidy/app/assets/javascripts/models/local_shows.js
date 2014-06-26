var LocalShows = function(){
};

LocalShows.prototype.getArtistName = function() {
    var artistName = $("#search_box").val();
    return artistName;
};

LocalShows.prototype.preparedLocalShowsQuery = function(artistName) {
    var words = artistName.replace(/\./g,'').split(' ');
    var preparedAristName = words.join('-').toLowerCase();
    return preparedArtistName;
};

LocalShows.prototype.parseLocalShows = function(artistInfo) {
    var localShows = artistInfo.events; //array of local shows
    var parsedLocalShows = [];
    for (var i=0; i<localShows.length; i++) {
        parsedLocalShows.push({
            "event_name": localShows[i].title,
            "venue": localShows[i].venue.name,
            "city": localShows[i].venue.city,
            "state": localShows[i].venue.state,
            "event_time": localShows[i].datetime_local,
            "tickets_left": localShows[i].stats.listing_count,
            "lowest_price": localShows[i].stats.lowest_price,
            "buy_tix_url": localShows[i].url
        });
    }
    return parsedLocalShows;
};


