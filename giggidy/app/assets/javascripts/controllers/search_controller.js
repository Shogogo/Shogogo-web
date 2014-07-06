Shogogo.SearchController = function() {
};

Shogogo.SearchController.prototype = {
    clearSearch: function() {
        this.view.resetSearchBox();
    },

    defineView: function(searchView) {
        this.view = searchView;
    }
};
