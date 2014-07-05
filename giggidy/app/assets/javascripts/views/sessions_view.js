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

    hideLoginForm: function() {
        $(this.loginForm).hide();
    },
    
    drawUserConfirm: function() {
        $(this.overlay).show();
        $(this.favoritesView.favoritesMenuContainer).hide();
        $(this.bandView.searchNode).hide();
        $(this.searchView.searchMessage).hide();
    },

    drawRegisteredUser: function() {
        $('#favorites-menu').removeClass('nofaves').addClass('faves');
        $('#search_message').hide();
        $('.search_container').removeClass('search_container').addClass('search_with_faves', { duration:200 });
        $('.login').hide();
    }
};