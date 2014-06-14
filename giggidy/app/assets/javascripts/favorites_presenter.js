FavoritesPresenter = function(band) {
    this.band = band;
};

FavoritesPresenter.prototype = {
    present: function() {
        var favoritesMenuNode = document.createElement('div');
        var bandContainerNode = document.createElement('div');
        var bandNameNode = document.createElement('div');
        var bandImageNode = document.createElement('img');
        var removeBandNode = document.createElement('button');
        var saveNode = document.createElement('button');

        favoritesMenuNode.className = "favorites_menu";

        bandContainerNode.className = "favorites_band_item";

        bandNameNode.className = "favorites_band_name";
        bandNameNode.innerText = this.band.name;

        bandImageNode.class = "favorites_band_image";
        bandImageNode.src = this.band.image_url_small;

        removeBandNode.className = "favorites_band_remove";
        removeBandNode.innerText = "RM";
            // Testing only - remove text - use img of negative sign
        // removeBandNode.src = "button image url";

        saveNode.className = "favorites_save";
        saveNode.innerText = "Notify Me!";
            // Button will add favorites to notify list and request user phone - change text to something more descriptive.
            
        bandContainerNode.appendChild(bandImageNode);
        bandContainerNode.appendChild(bandNameNode);
        bandContainerNode.appendChild(removeBandNode);

        favoritesMenuNode.appendChild(bandContainerNode);
        favoritesMenuNode.appendChild(saveNode);

        return favoritesMenuNode;
    }
};