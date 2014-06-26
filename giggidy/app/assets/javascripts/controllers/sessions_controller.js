var SessionsController = function() {
    this.sessionsView = SessionsView.new();
    this.favoritesView = FavoritesView.new();
};

SessionsController.prototype = {
    getLoginForm: function() {
        $.get("/users/new", function(data) {
            $(favoritesView.favoritesMenuContainer).html(data);
        }, "html");
    }
};