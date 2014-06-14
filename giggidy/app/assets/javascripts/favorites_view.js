FavoritesView = function() {
    this.favoritesMenuNode = document.getElementsByClassName('favorites_menu')[0];
};

FavoritesView.prototype = {
    draw:function(band) {
        var newFavoritesMenu = new FavoritesPresenter(band).present();
        this.favoritesMenuNode.innerHTML = newFavoritesMenu.innerHTML;
    }
};