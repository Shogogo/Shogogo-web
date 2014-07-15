Shogogo.SearchBox = function(seatGeekParser){
    this.seatGeekParser = seatGeekParser;
};

Shogogo.SearchBox.prototype = {
    searchSuggest: function() {
        $("#search_box").suggest({filter:'(all type:/music/artist)'});
    },

    getArtistName: function() {
        var artistName = $("#search_box").val();
        return artistName;
    },

    preparedArtist: function(artistName) {
        return this.seatGeekParser.preparedArtistQuery(artistName);
    },

    parseArtistInfo: function(artistInfo) {
        return this.seatGeekParser.parseArtistInfo(artistInfo);
    },

    defineView: function(searchView) {
        this.searchView = searchView;
    }
};