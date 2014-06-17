FavoritesPresenter = function() {
};

FavoritesPresenter.prototype = {
    present: function(favoriteList) {
        var favoritesMenuNode = document.createElement('div');
        var saveNode = document.createElement('button');

        favoritesMenuNode.className = "favorites_menu";
        saveNode.className = "favorites_save";
            // Button will add favorites to notify list and request user phone - change text to something more descriptive.
        saveNode.textContent = "Notify Me!";

        for (i = 0; i < favoriteList.length; i++) {
            var bandContainerNode = document.createElement('div');
            var bandNameNode = document.createElement('span');
            var bandImageNode = document.createElement('img');
            var removeBandNode = document.createElement('button');

            bandContainerNode.className = "favorites_band_item";

            bandNameNode.className = "favorites_band_name";
            bandNameNode.textContent = favoriteList[i].name;

            bandImageNode.className = "favorites_band_image";
            bandImageNode.src = favoriteList[i].image_url_small || "assets/guitarboat-square.jpeg";

            removeBandNode.className = "favorites_band_remove";
            removeBandNode.textContent = "X";

            bandContainerNode.appendChild(bandImageNode);
            bandContainerNode.appendChild(bandNameNode);
            bandContainerNode.appendChild(removeBandNode);
                // Testing only - remove text - use img of negative sign
                // removeBandNode.src = "button image url";
            favoritesMenuNode.appendChild(bandContainerNode);
        }

        favoritesMenuNode.appendChild(saveNode);

        return favoritesMenuNode;
    }
};
