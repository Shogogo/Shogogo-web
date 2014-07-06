Shogogo.Controller = function() {
};

Shogogo.Controller.prototype = {
    init: function(favoritesController, searchController, sessionsController) {
        this.favorites = favoritesController;
        this.search = searchController;
        this.sessions = sessionsController;
    },

    renderLoginView: function() {
        this.favorites.renderSidebar();
        this.search.renderSidebarView();
    }
};