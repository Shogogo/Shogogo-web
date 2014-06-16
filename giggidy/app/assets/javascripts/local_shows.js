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

