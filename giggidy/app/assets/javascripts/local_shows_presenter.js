var LocalShowsPresenter = function() {
};

LocalShowsPresenter.prototype = {
    present: function(localShows) {
        var localShowsContainerNode = document.createElement('div');

        localShowsNode.id = "local_shows_container";
        for (var i=0; i<localShows.length; i++) {
            var showContainerNode = document.createElement('div');
            var timeNode = document.createElement('div');
            var eventNameNode = document.createElement('span');
            var venueNode = document.createElement('span');
            var cityNode = document.createElement('span');
            var stateNode = document.createElement('span');
            var tixLeftNode = document.createElement('span');
            var buyTixNode = document.createElement('a');

            timeNode.innerText = localShows[i].event_time;
            eventNameNode.innerText = localShows[i].event_name;
            venueNode.innerText = localShows[i].venue;
            cityNode.innerText = localShows[i].city;
            stateNode.innerText = localShows[i].state;
            tixLeftNode.innerText = localShows[i].lowest_price;
            buyTixNode.innerText; = "BUY NOW" 
            buyTixNode.attr('href', localShows[i].buy_tix_url); 

            showContainerNode.appendChild(timeNode); 
            showContainerNode.appendChild(eventNameNode); 
            showContainerNode.appendChild(venueNode); 
            showContainerNode.appendChild(cityNode); 
            showContainerNode.appendChild(stateNode); 
            showContainerNode.appendChild(tixLeftNode); 
            showContainerNode.appendChild(buyTixNode); 

            localShowsContainerPanelNode.appendChild(showContainerNode);
        }
        return localShowsContainerNode;
    }
};
