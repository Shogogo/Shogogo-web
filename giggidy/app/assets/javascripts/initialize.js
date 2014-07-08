$(document).ready(function() {
    var controller = new Shogogo.Controller();
    var searchController = new Shogogo.SearchController(new SearchBox());
    var favoritesController = new Shogogo.FavoritesController(new Shogogo.FavoritesView());
    var sessionsController = new Shogogo.SessionsController();
    
    sessionsController.defineView(new Shogogo.SessionsView(domElements));

    searchController.defineView(new Shogogo.SearchView(domElements));
    
    sessionsController.listeners();
    searchController.listeners();
    favoritesController.listeners();
});