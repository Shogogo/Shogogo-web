BandPresenter = function(band) {
    this.band = band;
};

BandPresenter.prototype = {
    present: function() {
        var bandPanelNode = document.createElement('div');
        var imageNode = document.createElement('img');
        var nameNode = document.createElement('div');
        var tourNode = document.createElement('div');
        var addNode = document.createElement('button');
       
        bandPanelNode.id = "band_container";

        imageNode.src = this.band.image_url_large;
        imageNode.className = "band_image";
        
        nameNode.innerText = this.band.name;
        nameNode.className = "band_name";
     
        tourNode.className = "tour_status";

        if(this.band.tour_status === true) {
            tourNode.innerText = "Touring";
        }
        else {
            tourNode.innerText = "Not Touring";
        }

        addNode.innerText = "Add+";
        addNode.setAttribute("id", "add_band");

        bandPanelNode.appendChild(imageNode);
        bandPanelNode.appendChild(nameNode);

        bandPanelNode.appendChild(tourNode);

        bandPanelNode.appendChild(addNode);

        return bandPanelNode;
    }
};