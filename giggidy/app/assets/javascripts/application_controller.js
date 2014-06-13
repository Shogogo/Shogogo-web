$(document).ready(function(){
  searchBox = new SearchBox();
  searchBox.searchSuggest();
  $(document).keypress(function(e) {
    if(e.which == 13) {
      var artistName = searchBox.getArtistName();
      var preparedArtistName = searchBox.preparedAristQuery(artistName);
      
        $.ajax({
            type: 'GET',
            url: preparedQuery,
            dataType: 'json'
        }).done(function(artistInfo){
            var artistData = artistInfo.performers[0];
            var artist = searchBox.parseArtistInfo(artistData);
            debugger
            return artist
            // console.log(preparedQuery);
            // console.log(artistInfo.performers[0]);
            // debugger
            // return 
        });



     
      
      // // return artist;
      // console.log(artist);
    }
  })
});

