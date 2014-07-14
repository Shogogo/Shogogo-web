Shogogo.FavoritesView = function(options) {
    this.options = options;
    this.favoritesMenuNode = options.favoritesMenuNode;
    this.sidebar = options.sidebar;
    this.favoriteNode = options.favoriteNode;
    this.resultsContainer = options.resultsContainer;
    this.favoriteId = options.favoriteId;
    this.addFavoriteButton = options.addFavoriteButton;
    this.removeFavoriteButton = options.removeFavoriteButton;
    this.classSidebarFavorites = options.classSidebarFavorites;
    this.classSidebarNoFavorites = options.classSidebarNoFavorites;

    this.favoritesPresenter = new FavoritesPresenter();
};

Shogogo.FavoritesView.prototype = {
    draw:function(favoriteList) {
        var newFavoritesMenu = this.favoritesPresenter.present(favoriteList);
        this.favoritesMenuNode.innerHTML = newFavoritesMenu.innerHTML;
        document.querySelector(this.favoritesMenuNode).setAttribute("style","overflow-y: scroll;");
    },

    remove: function(band) {
        $(band).slideUp(100, function() {
            $(this).remove();
        });
    }
};