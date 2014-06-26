var SessionsController = function() {
    this.sessionsView = new SessionsView();
    this.favoritesView = new FavoritesView();
};

SessionsController.prototype = {
    drawLoginForm: function(data) {
        this.sessionsView.drawLoginForm(data);
    },

    signUpListener: function() {
        _this = this;
        $( document ).on( "click", this.favoritesView.favoritesSaveButton, function(e) {
            e.preventDefault();
            $.get("/users/new", function(data) {
                _this.drawLoginForm(data);
            }, "html");
        });
    }
};
