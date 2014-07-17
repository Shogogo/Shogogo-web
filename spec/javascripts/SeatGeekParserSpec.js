describe("SeatGeekParserSpec", function() {
    var seatGeekParser;
    beforeEach(function() {
        seatGeekParser = new Shogogo.SeatGeekParser();
    });

    it("should prepare an api call url", function() {
        expect(seatGeekParser.preparedArtistQuery("Fleetwood Mac")).toEqual("http://api.seatgeek.com/2/performers?slug=fleetwood-mac");
    });
    
    it("should create an artist object from json api request", function() {
        var result = seatGeekParser.parseArtistInfo(seatGeekJSON.performers[0]);

        expect(result).toEqual(parsedFleetWoodMacArtistObject);
    });
});