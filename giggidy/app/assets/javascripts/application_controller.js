$(document).ready(function(){
  searchBox = new SearchBox();
  searchBox.searchSuggest();
  $(document).keypress(function(e) {
    if(e.which == 13) {
      var artistName = searchBox.getArtistName();
      var preparedArtistName = searchBox.preparedAristQuery(artistName);
      
        $.ajax({
            type: 'GET',
            url: preparedArtistName,
            dataType: 'json'
        }).done(function(artistInfo){
            var artistData = artistInfo.performers[0];
            var artist = searchBox.parseArtistInfo(artistData);
            return artist
        });
    }
  })
});

