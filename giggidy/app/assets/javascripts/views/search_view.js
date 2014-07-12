Shogogo.SearchView = function(options) {
    this.options = options;
    this.searchBox = options.searchBox;
    this.searchMessage = document.querySelector(options.searchMessage);
    this.classLogin = document.querySelector(options.classLogin);
    this.resultsContainer = document.querySelector(options.resultsContainer);
};

Shogogo.SearchView.prototype = {
    resetSearchBox: function() {
        $(this.searchBox).val('');
        $(this.resultsContainer).fadeOut();
    },

    renderResultsView: function() {
        $(this.searchMessage).hide();
        $(this.classLogin).hide();
    }
};