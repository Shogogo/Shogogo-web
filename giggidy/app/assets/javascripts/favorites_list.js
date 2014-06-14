FavoriteList = function() {
    this.list = [];
};

FavoriteList.prototype = {
    addBand: function(band) {
        this.list.push(band);
    },
    removeBand: function(band_literal) {
        this.list.forEach(function(band) {
            if (list[band_literal] === band)
                list.splice(band_literal, 1);
        });
    }
};