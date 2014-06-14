$(document).ready(function() {
    var bandView = new BandView();
    var favoritesView = new FavoritesView();
    var artist = null;

    searchBox = new SearchBox();
    // searchBox.searchSuggest();
 
    $("#search_box")
        .suggest({filter:'(all type:/music/artist)', flyout: false})
        .bind('fb-select', function(e) {
            var artistName = searchBox.getArtistName();
            var preparedArtistName = searchBox.preparedAristQuery(artistName);
            
            $.getJSON(preparedArtistName).done(function(artistInfo) {
                var artistData = artistInfo.performers[0];
                artist = searchBox.parseArtistInfo(artistData);
                bandView.draw(artist);
            });
    });
    
    $('#band_container').on('click', 'button', function(e) {
        e.preventDefault();
        favoritesView.draw(artist);
    });
});
