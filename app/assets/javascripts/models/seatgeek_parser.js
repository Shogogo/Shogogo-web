Shogogo.SeatGeekParser = function(){};

Shogogo.SeatGeekParser.prototype = {
     preparedArtistQuery: function(artistName) {
        var words = artistName.replace(/(\.)?(\,)?(\&)?/g,'').split(/[ ]+/);
        var lowercased_words = words.join('-').toLowerCase();
        var preparedAristName = removeDiacritics(lowercased_words);
        return 'http://api.seatgeek.com/2/performers?slug=' + preparedAristName;
    },

    parseArtistInfo: function(artistInfo) {
        var artist = {
            name: artistInfo.name,
            image_url_large: artistInfo.images.huge,
            image_url_small: artistInfo.images.small || 'assets/guitarboat-square.jpeg',
            id: artistInfo.id,
            type: artistInfo.type,
            tour_status: artistInfo.has_upcoming_events
        };
        return artist;
    }
};