FavoriteAjaxPreparer = function() {
    this.list = JSON.parse(sessionStorage.favoriteList);
    this.bandIdArray =[];
};

FavoriteAjaxPreparer.prototype = {
    save: function() {
        for (i = 0; i < this.list.length; i++) {
            this.bandIdArray.push(this.list[i].id);
        }
    return this.bandIdArray.toString();
    }
};