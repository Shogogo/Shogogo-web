Shogogo.FavoritesController = function() {
    this.favoritesPresenter = new FavoritesPresenter();
};

Shogogo.FavoritesController.prototype = {
    listeners: function() {
        this.addFavoriteListener();
        this.removeFavoriteListener();
    },

    removeFavorite: function(band) {
        var bandName = band.find(this.sidebarView.favoriteNode).text();
        var favoriteId = band.attr(this.sidebarView.favoriteId);
        var destroy_path = "/favorites/" + favoriteId;
        this.sidebarView.remove(band);
        $.ajax({
             url: destroy_path,
             type: 'DELETE',
             dataType: 'json',
             data: { favorite: { name: bandName }, authenticity_token: authToken() }
         });
    },

    renderFavoritesView: function() {
        this.sidebarView.renderSidebar();
    },

    addFavoriteListener: function() {
        var _this = this;
        $(this.bandView.resultsContainer).on('click', this.sidebarView.addFavoriteButton, function(e) {
            e.preventDefault();
            var artist = artistService.getArtist();
            _this.renderArtist(artist);
            _this.addFavorite(artist);
            _this.sidebarView.renderSidebarLayout();
            _this.sidebarView.renderSidebar();
        });
    },

    removeFavoriteListener: function() {
        var _this = this;
        $(document).on('click', this.sidebarView.removeFavoriteButton, function(e) {
            e.preventDefault();
            var band = $(this).closest(_this.sidebarView.favoriteNode);
            _this.removeFavorite(band);
        });
    },

    renderArtist: function(artist) {
        var newFavorite = this.favoritesPresenter.append(artist);
        this.sidebarView.add(newFavorite);
    },

    addFavorite: function(artist) {
        var _this = this;
        $.post("/favorites", { favorite: {
            seatgeek_id: artist.id,
            name: artist.name,
            image_url_small: artist.image_url_small }, authenticity_token: authToken()
        }).done(function(data) {
            var favorite_id = data.id;
            $(_this.sidebarView.favoriteNode).last().attr(_this.sidebarView.favoriteId, favorite_id);
        });
    },

    defineView: function(sidebarView, bandView) {
        this.sidebarView = sidebarView;
        this.bandView = bandView;
    }
};