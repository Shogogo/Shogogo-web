Shogogo.SearchView = function(options) {
    this.options = options;
    this.searchBox = document.querySelector(options.searchBox);
    this.searchMessage = document.querySelector(options.searchMessage);
    this.classLogin = document.querySelector(options.classLogin);
    this.resultsContainer = options.resultsContainer;
};

Shogogo.SearchView.prototype = {
    resetSearchBox: function() {
        this.searchBox.value = '';
        $(this.resultsContainer).fadeOut();
    },

    renderResultsView: function() {
        $(this.searchMessage).hide();
        $(this.classLogin).hide();
    }
};