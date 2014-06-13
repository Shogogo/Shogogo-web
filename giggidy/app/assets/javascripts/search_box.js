// Search Suggestions
function searchSuggest() {
  $("#search_box").suggest({filter:'(all type:/music/artist)'});
};

// Get Artist Info
function getArtistName() {
  artistName = $("#search_box").val();
  return artistName;
}

function prepareArtistQuery(artistName){
  words = artistName.split(' ');
  preparedAristName = words.join('-');
  return preparedAristName;
}

function getArtistInfo(preparedAristName){
  $.ajax({
    type: 'GET',
    url: 'http://api.seatgeek.com/2/performers?slug=' + preparedAristName,
    dataType: 'json'
  }).done(function(artistInfo){
    return artistInfo;
  })
}

function parseArtistInfo(artistInfo){
  artist = new Object();
  artist.name = artistInfo.performers[0].name
  artist.images = artistInfo.performers[0].images
  artist.id = artistInfo.performers[0].id
  artist.type = artistInfo.performers[0].type
  return artist;
}