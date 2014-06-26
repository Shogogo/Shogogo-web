SessionsView = function() {
    this.loginForm = document.getElementsByClassName('local_shows_list')[0];
    this.favoritesView = new FavoritesView();
};

SessionsView.prototype = {
    drawLoginForm: function(data) {
        $(this.favoritesView.favoritesMenuContainer).html(data);
    }
};