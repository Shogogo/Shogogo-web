
Shogogo.SessionsView = function(options) {
    this.options = options;
    this.loginForm = options.loginForm;
    this.sidebar = options.sidebar;
    this.overlay = options.overlay;
    this.loginLink = options.loginLink;

    this.favoritesView = new FavoritesView();
    this.bandView = new BandView();
};

Shogogo.SessionsView.prototype = {

    renderLoginForm: function(data) {
        this.sidebar.innerHTML = data;
        this.loginForm = document.querySelector(this.loginForm);
    },

    renderLoginLayout: function() {
        $('#favorites-menu').removeClass('nofaves').addClass('faves');
        $('#search_message').hide();
        $('.search_container').removeClass('search_container').addClass('search_with_faves', { duration:200 });
        $('.login').hide();

    },

    hideLoginForm: function() {
        this.sidebar.innerHTML = '';
    },
    
    drawUserConfirm: function() {
        $(this.overlay).show();
        $(this.sidebar).hide();
        $(this.bandView.searchNode).hide();
        $(this.searchView.searchMessage).hide();
    }

    
};