FavoritesPresenter = function(band) {
    this.band = band;
    var div = document.createElement('div');
    var button = document.createElement('button');
    var img = document.createElement('img');
};

FavoritesPresenter.prototype = {
    present: function() {
        var favoritesMenuNode = div;
        var bandContainerNode = div;
        var bandNameNode = div;
        var bandImageNode = img;
        var removeArtistNode = button;
        var saveNode = button;

        favoritesMenuNode.className = "favorites_menu";

        bandContainerNode.className = "favorites_band_item";

        bandNameNode.className = "favorites_band_name";
        bandNameNode.innerText = this.band.name;

        bandImageNode.class = "favorites_band_image";
        bandImageNode.src = this.band.image_url_small;

        removeArtistNode.className = "favorites_band_remove";
        removeArtistNode.innerText = "RM";
            // Testing only - remove text - use img of negative sign
        // removeArtistNode.src = "button image url";

        saveNode.className = "favorites_save";
        saveNode.innerText = "Notify Me!";
            // Button will add favorites to notify list and request user phone - change text to something more descriptive.

    }
};
