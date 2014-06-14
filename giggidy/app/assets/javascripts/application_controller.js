$(document).ready(function() {
    var bandView = new BandView();

    searchBox = new SearchBox();
    // searchBox.searchSuggest();
 
    $("#search_box")
        .suggest({filter:'(all type:/music/artist)'})
        .bind('fb-select', function(e) {
            var artistName = searchBox.getArtistName();
            var preparedArtistName = searchBox.preparedAristQuery(artistName);
            
            $.getJSON(preparedArtistName).done(function(artistInfo) {
                var artistData = artistInfo.performers[0];
                var artist = searchBox.parseArtistInfo(artistData);
                bandView.draw(artist);
            });
    });
});
