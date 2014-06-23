var SearchBox = function(){
};

SearchBox.prototype.searchSuggest = function() {
    $("#search_box").suggest({filter:'(all type:/music/artist)'});
};

SearchBox.prototype.getArtistName = function() {
    var artistName = $("#search_box").val();
    return artistName;
};

SearchBox.prototype.preparedArtistQuery = function(artistName) {
    var words = artistName.replace(/(\.)?(\,)?(\&)?/g,'').split(/[ ]+/);
    var lowercased_words = words.join('-').toLowerCase();
    var preparedAristName = removeDiacritics(lowercased_words);
    return 'http://api.seatgeek.com/2/performers?slug=' + preparedAristName;
};

SearchBox.prototype.parseArtistInfo = function(artistInfo) {
    var artist = {
        name: artistInfo.name,
        image_url_large: artistInfo.images.huge,
        image_url_small: artistInfo.images.small,
        id: artistInfo.id,
        type: artistInfo.type,
        tour_status: artistInfo.has_upcoming_events
    };
    return artist;
};