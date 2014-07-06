Shogogo.View = function(options) {
    this.options = options;
    this.sidebar = options.sidebar;
    this.searchBox = options.searchBox;
    this.searchMessage = options.searchMessage;
    this.searchContainer = options.searchContainer;
};

Shogogo.View.prototype = {
    renderSidebar: function() {
    },

    renderLoginView: function() {
        $(this.sidebar).removeClass('nofaves').addClass('faves');
        $(this.searchMessage).hide();
        $(this.searchContainer).removeClass('');
    }
};