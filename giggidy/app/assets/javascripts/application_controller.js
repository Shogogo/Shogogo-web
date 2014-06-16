$(document).ready(function() {
    var bandView = new BandView();
    var favoritesView = new FavoritesView();
    var favoriteList = new FavoriteList();
    var artist = null;

    // $.ajax({
    //     url: "/get_session",
    //     dataType: "json"
    // }).done(function(response){
    //     sessionDetails = response;
    //     console.log(response);
    // });

    searchBox = new SearchBox();
    // searchBox.searchSuggest();
    // 
    
    if (localStorage.favoriteList) {
        favoriteList.list = JSON.parse(localStorage.favoriteList);
        favoritesView.draw(favoriteList.list);
    }

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
        $('#favorites-menu').removeClass('nofaves').addClass('faves');
    });

    $( document ).on( "click", ".favorites_band_remove", function(e) {
        e.preventDefault();
        var band = $(this).closest('.favorites_band_item').find('.favorites_band_name').text();
        favoriteList.removeBand(band);
        favoritesView.draw(JSON.parse(localStorage.favoriteList));
    });

    $( document ).on( "click", ".favorites_save", function(e) {
        e.preventDefault();
        
        $.get("/users/new", function(data) {
            $('#favorites-menu').html(data);
        }, "html");
    });

    $( document ).on( "submit", "#phone", function(e) {
        e.preventDefault();
        var data = $("#phone").serialize();
        var saveFavoriteList = new SaveFavoriteList();
        var bandIds = JSON.stringify(saveFavoriteList.save());

       

    $.ajax({
        url: '/signup',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data:  JSON.stringify( { user: { phone_number: $("#phone input[name='phone_number']").val() } }),
        success: function ( data ) {
            alert( data );
        }
    });

    $( document ).mouseup(function (e){
        var container = $("#favorites-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0){
        container.hide('slow');
    }
});
});

});
