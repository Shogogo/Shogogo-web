Shogogo.SearchController = function(searchBox) {
    this.searchBox = searchBox;
};

Shogogo.SearchController.prototype = {
    listeners: function() {
        this.clearSearchListener();
        this.searchListener();
    },

    clearSearch: function() {
        this.searchView.resetSearchBox();
    },

    defineView: function(searchView, bandView) {
        this.searchView = searchView;
        this.bandView = bandView;
        this.searchBox.defineView(searchView);
    },

    clearSearchListener: function() {
        var _this = this;
        this.searchView.searchBox.addEventListener("click", function(e) {
            e.preventDefault();
            _this.clearSearch();
        }, false);
    },

    searchListener: function() {
        var _this = this;
        $(this.searchBox)
        .suggest({ filter:'(all type:/music/artist)',
            flyout: false,
            css: { pane: "suggest_pane",
                   list: "suggest_list",
                 status: "suggest_status" },
                  "key": "AIzaSyBCuOTLMAC-WOcLzyv2YeKvCvwaDPI8NhI"
        })
        .bind('fb-select', function(e) {
            var artistName = _this.searchBox.getArtistName();
            var preparedArtistName = _this.searchBox.preparedArtistQuery(artistName);
            _this.searchView.renderResultsView();
            $('input:text').focus(function(){
            $(this).val('');
         });
        _this.getArtist(preparedArtistName);
        });
    },

    getArtist: function(preparedArtistName) {
        var _this = this;
        $.getJSON(preparedArtistName).done(function(artistInfo) {
            var artistData = artistInfo.performers[0];
            artistObject = _this.searchBox.parseArtistInfo(artistData);
            _this.bandView.draw(artistObject);
            artistService.addArtist(artistObject);
        });
    }
};