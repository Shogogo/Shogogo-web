Shogogo.SidebarView = function(options) {
    this.options = options;
    this.sidebar = options.sidebar;
    this.searchContainer = document.querySelector(options.searchContainer);
    this.classSearchContainerFavorites = options.classSearchContainerFavorites;
    this.classSidebarFavorites = options.classSidebarFavorites;
    this.classSidebarNoFavorites = options.classSidebarNoFavorites;
    this.classLogin = options.classLogin;
    this.search_message = document.querySelector(options.searchMessage);
};

Shogogo.SidebarView.prototype = {

    draw: function(view) {
        document.querySelector(this.sidebar).innerHTML = view;
    },

    add: function(viewElement) {
        var newElement = document.querySelect(this.favoritesMenuNode).appendChild(viewElement);
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
        $(this.searchContainer).addClass(this.classSearchContainerFavorites, { duration:300 });
        $(this.search_message).hide();
        $(this.classLogin).hide();
    }

};