$(document).ready(function(){
  searchBox = new SearchBox();
  searchBox.searchSuggest();
  $(document).keypress(function(e) {
    if(e.which == 13) {
      var artistName = searchBox.getArtistName();
      var preparedArtistName = searchBox.preparedAristQuery(artistName);
      var artistData = searchBox.getArtistInfo(preparedArtistName);
      console.log(artistData);
      var artist = searchBox.parseArtistInfo(artistData);
      // return artist;
      console.log(artist);
    }
  })
});

