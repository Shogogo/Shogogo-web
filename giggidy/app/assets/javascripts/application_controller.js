$(document).ready(function() {
    var bandView = new BandView();
    var localShowsView = new LocalShowsView();
    var favoritesView = new FavoritesView();
    var favoriteList = new FavoriteList();
    var localShows = new LocalShows();
    var searchBox = new SearchBox();
    var artist;

    $("#search_box")
        .suggest({filter:'(all type:/music/artist)'
                , flyout: false
                , css: {pane: "suggest_pane"
                , list: "suggest_list"
                , status: "suggest_status"}
        })
        .bind('fb-select', function(e) {
            var artistName = searchBox.getArtistName();
            var preparedArtistName = searchBox.preparedArtistQuery(artistName);

            $.getJSON(preparedArtistName).done(function(artistInfo) {
                var artistData = artistInfo.performers[0];
                artistObject = searchBox.parseArtistInfo(artistData);
                bandView.draw(artistObject);
                $.post("/favorites", { artist: artistObject });
            });
    });



    $('#band_container').on('click', 'button', function(e) {
        e.preventDefault();
        favoriteList.addBand(artist);
        favoritesView.draw(favoriteList.list);
        $('#band_container').empty().hide();
        $('#favorites-menu').removeClass('nofaves').addClass('faves');
    });

    $( document ).on( "click", ".favorites_band_remove", function(e) {
        e.preventDefault();
        var band = $(this).closest('.favorites_band_item').find('.favorites_band_name').text();
        favoriteList.removeBand(band);
        favoritesView.draw(JSON.parse(sessionStorage.favoriteList));
    });

    $( document ).on( "click", ".favorites_save", function(e) {
        e.preventDefault();
        $.get("/users/new", function(data) {
            $('#favorites-menu').html(data);
        }, "html");
    });

    $( document ).on( "submit", "#phone", function(e) {
        e.preventDefault();
        var favoriteAjaxPreparer = new FavoriteAjaxPreparer();
        var bandIds = favoriteAjaxPreparer.save();
        $.post('/signup',
            { user: { phone_number: $("#phone input[name='phone_number']").val(), bands: bandIds }
            }, function(response) {
            alert(response);
        },'json');
    });
});
