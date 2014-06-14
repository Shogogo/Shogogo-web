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

        bandNode.className = "favorites_band_item";




  }



}
