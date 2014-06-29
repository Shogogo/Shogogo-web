SessionsView = function() {
    this.loginForm = document.getElementsByClassName('local_shows_list')[0];
    this.overlay = $('.overlay');
    this.favoritesView = new FavoritesView();
    this.bandView = new BandView();
    this.searchView = new SearchView();
};

SessionsView.prototype = {
    drawLoginForm: function(data) {
        $(this.favoritesView.favoritesMenuContainer).html(data);
    },
    
    drawUserConfirm: function() {
        $(this.overlay).show();
        $(this.favoritesView.favoritesMenuContainer).hide();
        $(this.bandView.searchNode).hide();
        $(this.searchView.searchMessage).hide();
    }
};