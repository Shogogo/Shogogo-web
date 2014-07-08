Shogogo.SearchView = function(options) {
    this.options = options;
    this.searchBox = document.querySelector(options.searchBox);
    this.searchMessage = document.querySelector(options.searchMessage);
    this.searchContainer = document.querySelector(options.searchContainer);
    this.classSearchContainerFavorites = document.querySelector(options.classSearchContainerFavorites);
    this.classSidebarFavorites = document.querySelector(options.classFavorites);
    this.classSidebarNoFavorites = document.querySelector(options.classNoFavorites);
    this.classLogin = document.querySelector(options.classLogin);
    this.resultsContainer = document.querySelector(options.resultsContainer);
};

Shogogo.SearchView.prototype = {
    resetSearchBox: function() {
        this.searchBox.value = '';
        $(this.resultsContainer).fadeOut();
    },

    renderSidebarView: function() {
        $(this.searchMessage).hide();
        $(this.searchContainer).removeClass(this.searchContainer).addClass(this.classSearchContainerFavorites, { duration:200 });
        $(this.classLogin).hide();
    }
};