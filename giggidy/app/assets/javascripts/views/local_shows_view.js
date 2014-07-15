Shogogo.LocalShowsView = function() {
    this.localShowsContainerNode = document.getElementsByClassName('local_shows_list')[0];
    this.localShowsPresenter = new LocalShowsPresenter();
};

Shogogo.LocalShowsView.prototype = {
    draw: function(shows) {
        var allLocalShows = this.LocalShowsPresenter.present(shows);
        this.localShowsContainerNode.innerHTML = allLocalShows.innerHTML;
    }
};