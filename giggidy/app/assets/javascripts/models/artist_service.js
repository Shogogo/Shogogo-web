function artistService() {
    var artistObject;
}

artistService.addArtist = function(artist) {
    artistObject = artist;
};

artistService.getArtist = function() {
    return artistObject;
};