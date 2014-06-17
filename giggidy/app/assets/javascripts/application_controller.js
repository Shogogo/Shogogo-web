/* While the setup of this is kind of jQuery soupy, you do have isolated and
 * encapsulated views that hint as to what's going on.  This is the most
 * promising JS implementation I've seen today.  Thanks for trying to think in
 * terms of OO JS.
 *
 */
$(document).ready(function() {
    var bandView = new BandView();
    var localShowsView = new LocalShowsView();
    var favoritesView = new FavoritesView();
    var favoriteList = new FavoriteList();
    var localShows = new LocalShows();
    var artist = null;

    // Go away commented out code!
    // $.ajax({
    //     url: "/get_session",
    //     dataType: "json"
    // }).done(function(response){
    //     sessionDetails = response;
    //     console.log(response);
    // });

    searchBox = new SearchBox();
    
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
            var preparedArtistName = searchBox.preparedArtistQuery(artistName);

            $.getJSON(preparedArtistName).done(function(artistInfo) {
                var artistData = artistInfo.performers[0];
                artist = searchBox.parseArtistInfo(artistData);
                bandView.draw(artist);
            });
        });

    // Go away commented out code!
             
            // $.getJSON("http://smart-ip.net/geoip-json?callback=?", function(data) {
            //     ('http://api.seatgeek.com/2/events?geoip='+ data.host + '&range=10mi&performers.slug=' + preparedAristName);
            // });

            //     .done(function(seatGeekEvents) {
            //         var parsedLocalShows = localShows.parseLocalShows(seatGeekEvents);
            //         localShowsView.draw(parsedLocalShows);
            // });

    // why isn't there a view that takes #band_container as an argument
    // which sets this up?

    /* Actually, each of these on handlers are handling persisting data
     * somewhere or manipulating the data somewhere...
     *
     * Man if there were a generic term for a thing that mediates interactions
     * between views and persistence layers...if only we had a term for
     * something that mediates ....oh right, it's a controller.  These are
     * basically controllers that you're dying to create, but are not.
     *
     */
    $('#band_container').on('click', 'button', function(e) {
        e.preventDefault();
        favoriteList.addBand(artist);
        favoritesView.draw(favoriteList.list);
        $('#band_container').empty().hide();
        $('#favorites-menu').removeClass('nofaves').addClass('faves');
    });

    $( document ).on( "click", ".favorites_band_remove", function(e) {
        e.preventDefault();
        /* So brittle, what if someone changes the class name of your DOM
         * elemement?  The app is dead.
         */
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
        var saveFavoriteList = new SaveFavoriteList();
        var bandIds = saveFavoriteList.save();
        /* Again, your DOM is dictating the future of your app.  Some designer
         * is going to change the name of some ID and your app will blow up.
         * This is not clean modular code
         */
        $.post('/signup',
            { user: { phone_number: $("#phone input[name='phone_number']").val(), bands: bandIds }
            }, function(response) {
            alert(response);
        },'json');
    });
});
