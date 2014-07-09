Shogogo.FavoritesController = function() {
    this.bandView = new BandView();
};

Shogogo.FavoritesController.prototype = {
    listeners: function() {
        this.addFavoriteListener();
        this.removeFavoriteListener();
    },

    removeFavorite: function(band) {
        var bandName = band.find(this.favoritesView.favoriteNode).text();
        var favoriteId = band.attr(this.favoritesView.favoriteId);
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
        var _this = this;
        $(this.favoritesView.resultsContainer).on('click', this.favoritesView.addFavoriteButton, function(e) {
            e.preventDefault();
            var artist = artistService.getArtist();
            _this.renderArtist(artist);
            _this.addFavorite(artist);
            _this.bandView.clearSearch();
        });
    },

    removeFavoriteListener: function() {
        var _this = this;
        $(document).on('click', this.favoritesView.removeFavoriteButton, function(e) {
            e.preventDefault();
            var band = $(this).closest(this.favoritesView.favoriteNode);
            _this.removeFavorite(band);
        });
    },

    renderArtist: function(artist) {
        this.favoritesView.append_draw(artist);
    },

    addFavorite: function(artist) {
        var _this = this;
        $.post("/favorites", { favorite: {
            seatgeek_id: artist.id,
            name: artist.name,
            image_url_small: artist.image_url_small }, authenticity_token: authToken()
        }).done(function(data) {
            var favorite_id = data.id;
            $(_this.favoritesView.favoriteNode).last().attr(_this.favoritesView.favoriteId, favorite_id);
        });
    },

    defineView: function(favoritesView) {
        this.favoritesView = favoritesView;
    }
};