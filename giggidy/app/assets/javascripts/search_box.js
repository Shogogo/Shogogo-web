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