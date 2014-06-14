FavoritesView = function() {
    this.favoritesMenuNode = document.getElementsByClassName('favorites_menu').first;
};

FavoritesView.prototype = {
    draw:function(band) {
        var newFavoritesMenu = new FavoritesPresenter(band).present();
        this.favoritesMenuNode.innerHTML = newFavoritesMenu.innerHTML;
    }
};