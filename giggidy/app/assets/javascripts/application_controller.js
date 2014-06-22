$(document).ready(function() {
    var bandView = new BandView();
    var localShowsView = new LocalShowsView();
    var favoritesView = new FavoritesView();
    var favoriteList = new FavoriteList();
    var localShows = new LocalShows();
    var searchBox = new SearchBox();
    var artistObject;
    $('.overlay').hide();

    function authToken() {
        return $('meta[name="csrf-token"]').attr('content');
    }

    $("#search_box")
        .suggest({ filter:'(all type:/music/artist)',
            flyout: false,
            css: { pane: "suggest_pane",
                   list: "suggest_list",
                 status: "suggest_status" },
                  "key": "AIzaSyBCuOTLMAC-WOcLzyv2YeKvCvwaDPI8NhI"
        })
        .bind('fb-select', function(e) {
            var artistName = searchBox.getArtistName();
            var preparedArtistName = searchBox.preparedArtistQuery(artistName);
            $('#search_message').hide();
            $('input:text').focus(function(){
            $(this).val('');
         });
            $.getJSON(preparedArtistName).done(function(artistInfo) {
                var artistData = artistInfo.performers[0];
                artistObject = searchBox.parseArtistInfo(artistData);
                bandView.draw(artistObject);
            });
    });

    $('#search_box').on('click', function() {
        $(this).val('');
        $('#band_container').fadeOut();
    });

    $('#band_container').on('click', 'button', function(e) {
        e.preventDefault();
        favoritesView.append_draw(artistObject);
        $.post("/favorites", { favorite: { seatgeek_id: artistObject.id, name: artistObject.name }, authenticity_token: authToken() })
            .done(function(data) {
                var favorite_id = data.id;
                $('.favorites_band_item').last().attr( "fav-id", favorite_id );
            });

        $('#band_container').empty().hide(200);
        $('#search_box').val('');
        $('#favorites-menu').removeClass('nofaves').addClass('faves');
        $('.search_container').animate({left: "12.5%"}, 200);
    });

    $( document ).on( "click", ".favorites_band_remove", function(e) {
        e.preventDefault();
        var band = $(this).closest('.favorites_band_item');
        var bandName = band.find('.favorites_band_name').text();
        var favoriteId = band.attr('fav-id');
        var destroy_path = "/favorites/" + favoriteId;
        $(band).remove();
        $.ajax({
             url: destroy_path,
             type: 'DELETE',
             dataType: 'json',
             data: { favorite: { name: bandName }, authenticity_token: authToken() }
         });
    });

    $( document ).on( "click", ".favorites_save", function(e) {
        e.preventDefault();
        $.get("/users/new", function(data) {
            $('#favorites-menu').html(data);
        }, "html");
    });

    $( document ).on( "submit", "#user_create", function(e) {
        e.preventDefault();
        if (!phoneValidator()) {
            return false;
        }
        $.ajax({
            url: '/users',
            type: 'POST',
            dataType: 'json',
            data: { user: { name: $("#user_create input[name='name']").val(), phone_number: $("#user_create input[name='phone_number']").val(),password: $("#user_create input[name='password']").val()} ,authenticity_token: authToken() },
            beforeSend: function() {
                $('.overlay').show();
                $('#favorites-menu').hide();
                $('#search_box').hide();
                $('#search_message').hide();
            },
            error: function(xhr){
                var errors = $.parseJSON(xhr.responseText).errors;
                alert(errors);
            }
        })
        .done(function(data) {
             window.location.replace("/");
        });
    });
});
