$(document).ready(function() {
    var bandView = new BandView();
    var favoritesView = new FavoritesView();
    var artist = null;

    searchBox = new SearchBox();
    // searchBox.searchSuggest();
 
    $("#search_box")
        .suggest({filter:'(all type:/music/artist)'})
        .bind('fb-select', function(e) {
            var artistName = searchBox.getArtistName();
            var preparedArtistName = searchBox.preparedAristQuery(artistName);
            
            $.getJSON(preparedArtistName).done(function(artistInfo) {
                var artistData = artistInfo.performers[0];
                artist = searchBox.parseArtistInfo(artistData);
                bandView.draw(artist);
            });
    });

    $("button").click(function(e) {
        // $(this).closest(".band_name")
            // Use to identify band to add to selected list // 
        e.preventDefault();
        alert("works")
        debugger
        favoritesView.draw(artist);

    });
});
