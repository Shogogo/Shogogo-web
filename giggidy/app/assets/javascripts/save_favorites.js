SaveFavoriteList = function() {
    this.list = JSON.parse(localStorage.favoriteList);
    this.bandIdArray =[];
};

SaveFavoriteList.prototype = {
    save: function() {
        for (i = 0; i < this.list.length; i++) {
            this.bandIdArray.push(this.list[i].id);
        }
    return this.bandIdArray;
    }
};