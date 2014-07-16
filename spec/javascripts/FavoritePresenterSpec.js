describe("FavoritesPresenter", function() {
    var favoritesPresenter;
    beforeEach(function() {
        favoritesPresenter = new FavoritesPresenter();
    });

    it("has present method", function() {
        expect(favoritesPresenter.present).toBeDefined();
    });

    it("creates a favorites menu div", function() {
        var favoriteList = new FavoriteList();
        
        favoriteList.addBand(parsedMadonnaArtistObject);
        favoriteList.addBand(parsedFleetWoodMacArtistObject);

        testNode = favoritesPresenter.present(favoriteList.list);

        expect(testNode.innerHTML).toEqual(favoriteMenuTestNode);
    });
});