Shogogo.SearchController = function() {
};

Shogogo.SearchController.prototype = {
    clearSearch: function() {
        this.searchView.resetSearchBox();
    },

    defineView: function(searchView) {
        this.searchView = searchView;
    }
};
