var SearchBox = function(){
  //
};

SearchBox.prototype.searchSuggest = function(){
  $("#search_box").suggest({filter:'(all type:/music/artist)'});  
}

SearchBox.prototype.getArtistName = function(){
  var artistName = $("#search_box").val();
  return artistName;
}

SearchBox.prototype.preparedAristQuery = function(artistName){
  var words = artistName.split(' ');
  var preparedAristName = words.join('-');
  return 'http://api.seatgeek.com/2/performers?slug=' + preparedAristName.toLowerCase();
}

// SearchBox.prototype.getArtistInfo = function(preparedQuery){
//   $.ajax({
//     type: 'GET',
//     url: preparedQuery,
//     dataType: 'json'
//   }).done(function(artistInfo){
//     console.log(preparedQuery);
//     console.log(artistInfo.performers[0]);
//     debugger
//     return artistInfo.performers[0];
//   })
// }

SearchBox.prototype.parseArtistInfo = function(artistInfo){
  var artist = new Object();
  artist.name = artistInfo.name;
  artist.img = artistInfo.img;
  artist.id = artistInfo.id;
  artist.type = artistInfo.type;
  return artist;
}