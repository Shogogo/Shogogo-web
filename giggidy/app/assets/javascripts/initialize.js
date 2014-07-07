$(document).ready(function() {
    var controller = new Shogogo.Controller();
    var searchController = new Shogogo.SearchController(new SearchBox());

    searchController.defineView(new Shogogo.SearchView({
        searchBox: document.querySelector('#search_box'),
        searchMessage: document.querySelector('#search_message'),
        searchContainer: document.querySelector('.search_container'),
        classSearchContainerFavorites: document.querySelector('.search_with_faves'),
        classSidebarFavorites: document.querySelector('.faves'),
        classSidebarNoFavorites: document.querySelector('.nofaves'),
        classLogin: document.querySelector('.login'),
        resultsContainer: document.querySelector('#band_container')
    }));

    var sessionsController = new Shogogo.SessionsController();
    
    sessionsController.defineView(new Shogogo.SessionsView({
        loginForm: "#login_form",
        userForm: '#user_create',
        signupLink: document.querySelector('.favorites_save'),
        indexElement: document.querySelector('.fullWidth'),
        sidebar: document.querySelector("#favorites-menu"),
        overlay: document.querySelector(".overlay"),
        loginLink: document.querySelector("#login_link")
    }));

    sessionsController.listeners();
    searchController.listeners();

    var favoritesController = new Shogogo.FavoritesController(new Shogogo.FavoritesView());

    favoritesController.listeners();

    var bandView = new BandView();

    var favoriteList = new FavoriteList();
    var searchBox = new SearchBox();
    var artistObject;

    $('.overlay').hide();

    
});