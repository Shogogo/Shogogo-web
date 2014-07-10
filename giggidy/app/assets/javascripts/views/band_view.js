Shogogo.BandView = function(options) {
    this.options = options;
    this.resultsContainer = options.resultsContainer;
    this.searchBox = options.searchBox;
    this.searchContainer = options.searchContainer;
    this.sidebar = options.sidebar;
    this.classSidebarFavorites = options.classSidebarFavorites;
    this.classSidebarNoFavorites = options.classSidebarNoFavorites;
};

Shogogo.BandView.prototype = {
    draw:function(band) {
        var new_band_container = new BandPresenter(band).present();
        document.querySelector(this.resultsContainer).innerHTML = new_band_container.innerHTML;
        $(this.resultsContainer).fadeIn('fast');
    },

    clearSearch: function() {
        $(this.resultsContainer).empty().hide(200);
        $(this.searchBox).val('');
        $(this.searchContainer).animate({left: "12.5%"}, 200);
        $(this.sidebar).removeClass(this.classSidebarNoFavorites).addClass(this.classSidebarFavorites);
    },

    removeBandContainer: function() {
        $(this.resultsContainer).fadeOut();
    }
};