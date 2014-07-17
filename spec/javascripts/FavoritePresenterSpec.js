describe("FavoritesPresenter", function() {
    var favoritesPresenter;
    beforeEach(function() {
        favoritesPresenter = new Shogogo.FavoritesPresenter();
    });

    it("has present method", function() {
        expect(favoritesPresenter.present).toBeDefined();
    });

    it("creates a favorites menu div", function() {
        testNode = favoritesPresenter.append(parsedMadonnaArtistObject);

        expect(testNode.innerHTML).toEqual(favoriteMenuTestNode);
    });
});