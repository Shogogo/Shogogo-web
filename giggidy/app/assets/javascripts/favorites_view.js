FavoritesView = function() {
    this.favoritesMenuNode = document.getElementsByClassName('favorites_menu')[0];
    this.favoritesPresenter = new FavoritesPresenter();
};

FavoritesView.prototype = {
    draw:function(favoriteList) {
        var newFavoritesMenu = this.favoritesPresenter.present(favoriteList);
        this.favoritesMenuNode.innerHTML = newFavoritesMenu.innerHTML;
        this.favoritesMenuNode.setAttribute("style","overflow-y: scroll;");
    },

    append_draw: function(band) {
        var newBandFavorite = this.favoritesPresenter.append(band);
        this.favoritesMenuNode.appendChild(newBandFavorite);

    }
};