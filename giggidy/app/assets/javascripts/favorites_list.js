FavoriteList = function() {
    this.list = [];
};

FavoriteList.prototype = {
    addBand: function(band) {
        this.list.push(band);
        localStorage.favoriteList = JSON.stringify(this.list);
    },
    removeBand: function(bandName) {
        for (i = 0; i < this.list.length; i++) {
            if (this.list[i].name === bandName)
                this.list.splice(i,1);
        }
        localStorage.favoriteList = JSON.stringify(this.list);
    }
};
