Shogogo.Controller = function() {
};

Shogogo.Controller.prototype = {
    init: function() {
        this._addControllers();
        this._defineViews();
        this._startListeners();
    },

    _addControllers: function() {
        this.favorites = new Shogogo.FavoritesController();
        this.search = new Shogogo.SearchController(new Shogogo.SearchBox());
        this.sessions = new Shogogo.SessionsController();
    },

    _defineViews: function() {
        this.sessions.defineView(new Shogogo.SessionsView(domElements));
        this.search.defineView(new Shogogo.SearchView(domElements), new BandView(domElements));
        this.favorites.defineView(new Shogogo.FavoritesView(domElements));
    },

    _startListeners: function() {
        this.sessions.listeners();
        this.search.listeners();
        this.favorites.listeners();
    }
};