FavoritesPresenter = function(band) {
    this.band = band;
};

FavoritesPresenter.prototype = {
    present: function(favoriteList) {
        var favoritesMenuNode = document.createElement('div');
        var bandContainerNode = document.createElement('div');
        var bandNameNode = document.createElement('div');
        var bandImageNode = document.createElement('img');
        var removeBandNode = document.createElement('button');
        var saveNode = document.createElement('button');

        favoritesMenuNode.className = "favorites_menu";
        bandContainerNode.className = "favorites_band_item";
        bandNameNode.className = "favorites_band_name";
        bandImageNode.className = "favorites_band_image";
        removeBandNode.className = "favorites_band_remove";
        
        favoriteList.forEach(function(band) {
            bandNameNode.innerText = band.name;
            bandImageNode.src = band.image_url_small;
            removeBandNode.innerText = "RM";
            bandContainerNode.appendChild(bandImageNode);
            bandContainerNode.appendChild(bandNameNode);
            bandContainerNode.appendChild(removeBandNode);
                // Testing only - remove text - use img of negative sign
                // removeBandNode.src = "button image url";
            favoritesMenuNode.appendChild(bandContainerNode);
        });

        saveNode.className = "favorites_save";
            // Button will add favorites to notify list and request user phone - change text to something more descriptive.
        saveNode.innerText = "Notify Me!";
        favoritesMenuNode.appendChild(saveNode);

        return favoritesMenuNode;
    }
};