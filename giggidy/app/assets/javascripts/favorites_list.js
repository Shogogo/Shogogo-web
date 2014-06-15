FavoriteList = function() {
    this.list = JSON.parse(localStorage.favoriteList) || [];
};

FavoriteList.prototype = {
    addBand: function(band) {
        this.list.push(band);
        localStorage.favoriteList = JSON.stringify(this.list);
    },
    removeBand: function(band_literal) {
        this.list.forEach(function(band) {
            if (list[band_literal] === band)
                list.splice(band_literal, 1);
        localStorage.favoriteList = JSON.stringify(this.list);
        });
    }
};