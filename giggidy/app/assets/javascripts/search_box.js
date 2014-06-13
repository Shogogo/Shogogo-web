var SearchBox = function(){
  //
};

SearchBox.prototype.searchSuggest = function(){
  $("#search_box").suggest({filter:'(all type:/music/artist)'});  
}

SearchBox.prototype.getArtistName = function(){
  artistName = $("#search_box").val();
  return artistName;
}

SearchBox.prototype.preparedAristQuery = function(artistName){
  words = artistName.split(' ');
  preparedAristName = words.join('-');
  return preparedAristName;
}

SearchBox.prototype.getArtistInfo = function(preparedAristName){
  $.ajax({
    type: 'GET',
    url: 'http://api.seatgeek.com/2/performers?slug=' + preparedAristName,
    dataType: 'json'
  }).done(function(artistInfo){
    return artistInfo;
  })
}

SearchBox.prototype.parseArtistInfo = function(artistInfo){
  artist = new Object();
  artist.name = artistInfo.performers[0].name
  artist.images = artistInfo.performers[0].images
  artist.id = artistInfo.performers[0].id
  artist.type = artistInfo.performers[0].type
  return artist;
}