function searchSuggest() {
  $("#search_box").suggest({filter:'(all type:/music/artist)'});
};

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
  }).done(function(response){
    return response;
  })
}