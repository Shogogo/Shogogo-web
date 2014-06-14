FavoritesPresenter = function(band) {
  this.band = band;
  var div = document.createElement('div');
  var button = document.createElement('button');
};

FavoritesPresenter.prototype = {
  present: function() {
    var favoritesMenuNode = div;
    var bandNode = div;
    var artistNameNode = div;
    var removeArtistNode = button;
    var saveNode = button;

    favoritesMenuNode.className = "favorites_menu";


  }



};
