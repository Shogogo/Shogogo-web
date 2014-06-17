describe("BandPresenter", function() {
    var bandPresenter;
    beforeEach(function() {
        bandPresenter = new BandPresenter(parsedFleetWoodMacArtistObject);
    });

    it("has present method", function() {
        expect(bandPresenter.present).toBeDefined();
    });

    it("creates a band container div", function() {
        var jasmineBandNode = bandPresenter.present();
        expect(jasmineBandNode.innerHTML).toEqual(bandFleetwoodMacTestNode);
    });
});