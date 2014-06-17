describe("SearchBox", function() {
    var searchBox;

    
    beforeEach(function() {
        searchBox = new SearchBox();
    });

    xit("should get artist name from search form", function() {
    });

    it("should prepare an api call url", function() {
        expect(searchBox.preparedArtistQuery("Fleetwood Mac")).toEqual("http://api.seatgeek.com/2/performers?slug=fleetwood-mac");
    });

    xit("should create an artist object from json api request", function() {

    });
});