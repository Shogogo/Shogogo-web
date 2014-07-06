Shogogo.SearchView = function(options) {
    this.options = options;
    this.searchBox = options.searchBox;
    this.searchMessage = options.searchMessage;
    this.searchContainer = options.searchContainer;
    this.classSearchContainerFavorites = options.classSearchContainerFavorites;
    this.classSidebarFavorites = options.classFavorites;
    this.classSidebarNoFavorites = options.classNoFavorites;
    this.classLogin = options.classLogin;
};

Shogogo.SearchView.prototype = {
    resetSearchBox: function() {
        this.searchBox.reset();
    },

    renderSidebarView: function() {
        $(this.searchMessage).hide();
        $(this.searchContainer).removeClass(this.searchContainer).addClass(this.classSearchContainerFavorites, { duration:200 });
        $(this.classLogin).hide();
    }
};