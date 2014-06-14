$(document).ready(function() {
    var bandView = new BandView();

    searchBox = new SearchBox();
    // searchBox.searchSuggest();
 
    $("#search_box")
        .suggest({filter:'(all type:/music/artist)'
                , flyout: false
                , css: {pane: "suggest_pane"
                , list: "suggest_list"
                , status: "suggest_status"}
        })
        .bind('fb-select', function(e) {
            var artistName = searchBox.getArtistName();
            var preparedArtistName = searchBox.preparedAristQuery(artistName);
            
            $.getJSON(preparedArtistName).done(function(artistInfo) {
                var artistData = artistInfo.performers[0];
                var artist = searchBox.parseArtistInfo(artistData);
                bandView.draw(artist);
            });
    });

    $("#add_band").on("click", function(e) {
        // $(this).closest(".band_name")
            // Use to identify band to add to selected list // 
    });
});
