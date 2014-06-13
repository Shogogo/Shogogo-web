function searchSuggest() {
  $("#search_box").suggest({filter:'(all type:/music/artist)'});
};

function getArtistName() {
  artist = $("#search_box").val();
  return artist;
}

