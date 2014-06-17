SaveFavoriteList = function() {
    this.list = JSON.parse(sessionStorage.favoriteList);
    this.bandIdArray =[];
};

SaveFavoriteList.prototype = {
    save: function() {
        for (i = 0; i < this.list.length; i++) {
            this.bandIdArray.push(this.list[i].id);
        }
    return this.bandIdArray.toString();
    }
};