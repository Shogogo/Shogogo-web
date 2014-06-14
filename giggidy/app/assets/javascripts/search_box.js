var SearchBox = function(){
};

SearchBox.prototype.searchSuggest = function() {
    $("#search_box").suggest({filter:'(all type:/music/artist)'});
};

SearchBox.prototype.getArtistName = function() {
    var artistName = $("#search_box").val();
    return artistName;
};

SearchBox.prototype.preparedAristQuery = function(artistName) {
    var words = artistName.split(' ');
    var preparedAristName = words.join('-');
    return 'http://api.seatgeek.com/2/performers?slug=' + preparedAristName.toLowerCase();
};

SearchBox.prototype.parseArtistInfo = function(artistInfo) {
    var artist = {
        name: artistInfo.name,
        image_url: artistInfo.image,
        id: artistInfo.id,
        type: artistInfo.type
    };
    return artist;
};