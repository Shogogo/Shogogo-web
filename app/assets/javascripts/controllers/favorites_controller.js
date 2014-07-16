FavoritesController = function() {
    this.favoritesView = new FavoritesView();
};

FavoritesController.prototype = {
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
    }
};