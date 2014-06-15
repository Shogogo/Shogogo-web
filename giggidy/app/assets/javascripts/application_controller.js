$(document).ready(function() {
    var bandView = new BandView();
    var favoritesView = new FavoritesView();
    var favoriteList = new FavoriteList();
    var artist = null;

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
                artist = searchBox.parseArtistInfo(artistData);
                bandView.draw(artist);
            });
    });

    $('#band_container').on('click', 'button', function(e) {
        e.preventDefault();
        favoriteList.addBand(artist);
        favoritesView.draw(favoriteList.list);
        $('#band_container').empty().hide();
    });


    $('.favorites_band_item').on('click', 'button', function(e) {
        e.preventDefault();
        debugger
        var band = $(this).closest('.favorites_band_item').find('.favorites_band_name').text()
        favoriteList.removeBand(band);
        favoritesView.draw(favoriteList.list);
        $('#band_container').empty().hide();
    });
});
