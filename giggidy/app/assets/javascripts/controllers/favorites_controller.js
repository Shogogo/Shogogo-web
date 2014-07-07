Shogogo.FavoritesController = function(favoritesView) {
    this.favoritesView = favoritesView;
    this.bandView = new BandView();
};

Shogogo.FavoritesController.prototype = {
    listeners: function() {
        this.addFavoriteListener();
    },

    removeFavorite: function(band) {
        var bandName = band.find('.favorites_band_name').text();
        var favoriteId = band.attr('fav-id');
        var destroy_path = "/favorites/" + favoriteId;
        this.favoritesView.remove(band);

        $.ajax({
             url: destroy_path,
             type: 'DELETE',
             dataType: 'json',
             data: { favorite: { name: bandName }, authenticity_token: authToken() }
         });
    },

    renderFavoritesView: function() {
        this.favoritesView.renderSidebar();
    },

    addFavoriteListener: function() {
        _this = this;
        $('#band_container').on('click', '#add_band', function(e) {
            e.preventDefault();
            var artist = artistService.getArtist();
            _this.renderArtist(artist);
            _this.addFavorite(artist);
            _this.bandView.clearSearch();
        });
    },

    removeFavoriteListener: function() {

    },

    renderArtist: function(artist) {
        this.favoritesView.append_draw(artist);
    },

    addFavorite: function(artist) {
        $.post("/favorites", { favorite: { seatgeek_id: artist.id, name: artist.name, image_url_small: artist.image_url_small }, authenticity_token: authToken()
        }).done(function(data) {
            var favorite_id = artist.id;
            $('.favorites_band_item').last().attr( "fav-id", favorite_id );
        });
    }
};

