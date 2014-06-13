View = function() {
    this.bandNode = document.getElementById('band_container');
};

View.prototype = {
    draw:function(band) {
        var new_band_container = new BandPresenter(band).present();
        this.bandNode.innerHTML(new_band_container);
    }
};