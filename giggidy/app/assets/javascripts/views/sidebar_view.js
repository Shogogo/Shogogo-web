Shogogo.SidebarView = function(options) {
    this.options = options;
    this.sidebar = options.sidebar;
    this.searchContainer = document.querySelector(options.searchContainer);
    this.classSearchContainerFavorites = options.classSearchContainerFavorites;
    this.classSidebarFavorites = options.classSidebarFavorites;
    this.classSidebarNoFavorites = options.classSidebarNoFavorites;
    this.classLogin = options.classLogin;
    this.search_message = document.querySelector(options.searchMessage);
    this.resultsContainer = options.resultsContainer;
    this.favoritesMenuNode = document.querySelector(options.favoritesMenuNode);
    this.removeFavoriteButton = options.removeFavoriteButton;
    this.favoriteNode = options.favoriteNode;
    this.addFavoriteButton = options.addFavoriteButton;
    this.favoriteId = options.favoriteId;
};

Shogogo.SidebarView.prototype = {

    draw: function(view) {
        document.querySelector(this.sidebar).innerHTML = view;
    },

    add: function(viewElement) {
        var newElement = this.favoritesMenuNode.appendChild(viewElement);
        $(newElement).slideDown(2000);
    },

    remove: function(viewElement) {
        $(viewElement).slideUp(100, function() {
            $(this).remove();
        });
    },

    renderSidebar: function() {
        $(this.sidebar).removeClass(this.classSidebarNoFavorites).addClass(this.classSidebarFavorites);
    },

    renderSidebarLayout: function() {
        $(this.resultsContainer).empty().hide(200);
        $(this.searchBox).val('');
        $(this.searchContainer).animate({left: "12.5%"}, 200);
        $(this.search_message).hide();
        $(this.classLogin).hide();
    }
};