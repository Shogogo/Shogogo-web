describe("FavoriteList", function() {
    var favoriteList;
    beforeEach(function() {
        favoriteList = new FavoriteList();
         // Stub data located in helpers/seatgeek_data.js
    });

    it("should add band to favorites list", function() {
        favoriteList.addBand(parsedFleetWoodMacArtistObject);
        expect(favoriteList.list[0]).toEqual(parsedFleetWoodMacArtistObject);
    });

    
    describe("favorite list with multiple band objects", function() {
        beforeEach(function() {
            favoriteList.addBand(parsedMadonnaArtistObject);
            favoriteList.addBand(parsedFleetWoodMacArtistObject);
        });

        it("should contain two band objects", function() {
            expect(favoriteList.list.length).toEqual(2);
        });

        it("should remove a given band from the favorites list", function() {
            favoriteList.removeBand("Madonna");
            expect(favoriteList.list[1]).not.toBeDefined();
            expect(favoriteList.list[0]).toEqual(parsedFleetWoodMacArtistObject);
            
        });


        

    });



});