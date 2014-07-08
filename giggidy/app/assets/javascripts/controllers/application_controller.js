Shogogo.Controller = function() {
};

Shogogo.Controller.prototype = {
    init: function() {
        this._addControllers();
        this._defineViews();
        this._startListeners();
    },

    _addControllers: function() {
        this.favorites = new Shogogo.FavoritesController(new Shogogo.FavoritesView());
        this.search = new Shogogo.SearchController(new SearchBox());
        this.sessions = new Shogogo.SessionsController();
    },

    _defineViews: function() {
        this.sessions.defineView(new Shogogo.SessionsView(domElements));
        this.search.defineView(new Shogogo.SearchView(domElements));
    },

    _startListeners: function() {
        this.sessions.listeners();
        this.search.listeners();
        this.favorites.listeners();
    }
};