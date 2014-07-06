FavoritesView = function() {
    this.favoritesMenuNode = document.getElementsByClassName('favorites_menu')[0];
    this.favoritesMenuContainer = document.getElementById('favorites-menu');
    this.favoritesSaveButton = document.getElementsByClassName('favorites_save')[0];
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
        var faveBand = this.favoritesMenuNode.appendChild(newBandFavorite);
        $(faveBand).slideDown(2000);
    },

    remove: function(band) {
        $(band).slideUp(100, function() {
            $(this).remove();
        });
    },

    renderSidebar: function() {
        $('#favorites-menu').removeClass('nofaves').addClass('faves');
    }

};
