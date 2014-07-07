Shogogo.SearchController = function() {
};

Shogogo.SearchController.prototype = {
    listeners: function() {
        this.clearSearchListener();
    },

    clearSearch: function() {
        this.searchView.resetSearchBox();
    },

    defineView: function(searchView) {
        this.searchView = searchView;
    },

    clearSearchListener: function() {
        var _this = this;
        this.searchView.searchBox.addEventListener("click", function(e) {
            e.preventDefault();
            _this.clearSearch();
        }, false);
    }
};