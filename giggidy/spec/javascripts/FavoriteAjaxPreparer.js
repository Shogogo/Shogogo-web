describe("FavoriteAjaxPreparer", function() {
    var favoriteAjaxPreparer;
    beforeEach(function() {
        favoriteAjaxPreparer = new favoriteAjaxPreparer();
    });

    it("has save method", function() {
        expect(favoriteAjaxPreparer.save).toBeDefined();
    });
});