$(document).ready(function() {
    var bandView = new BandView();

    searchBox = new SearchBox();
    searchBox.searchSuggest();
    
    $(document).keypress(function(e) {
        if(e.which == 13) {
            var artistName = searchBox.getArtistName();
            var preparedArtistName = searchBox.preparedAristQuery(artistName);
            
            $.getJSON(preparedArtistName).done(function(artistInfo) {
                var artistData = artistInfo.performers[0];
                var artist = searchBox.parseArtistInfo(artistData);
                bandView.draw(artist);
            });
        }
    });
});

