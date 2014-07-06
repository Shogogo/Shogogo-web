BandView = function() {
    this.bandNode = document.getElementById('band_container');
    this.searchNode = document.getElementById('search_box');
    this.searchContainer = document.getElementsByClassName('search_container')[0];
    this.favoritesView = new FavoritesView();
};

BandView.prototype = {
    draw:function(band) {
        var new_band_container = new BandPresenter(band).present();
        this.bandNode.innerHTML = new_band_container.innerHTML;
        $(this.bandNode).fadeIn('fast');
    },

    clearSearch: function() {
        $(this.bandNode).empty().hide(200);
        $(this.searchNode).val('');
        $(this.searchContainer).animate({left: "12.5%"}, 200);
        $('#favorites-menu').removeClass('nofaves').addClass('faves');
    },

    removeBandContainer: function() {
        $(this.bandNode).fadeOut();
    }
};
