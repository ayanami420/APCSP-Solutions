// Create and assign starting values for the list
var songList = ["The Twist", "Stop! In the Name of Love", "Dancing in the Streets", "The Locomotion", "Happy Together", "I Wanna Hold Your Hand", "Build Me Up Buttercup", "Crimson and Clover", "Stand By Me", "I'm a Believer"];

updateScreen();

onEvent("updateButton", "click", function( ) {
  var newSong = getText("songInput");
  var index =  songList.length-1;
  removeItem(songList, index);
  insertItem(songList, 0, newSong);
  
  
  // Add code to get the name of the new song and its position in the list
  
  
  // Add code to insert the song into the list at the position indicated
  
  
  // Add code to remove the last item from the list
  
  
  playSound("sound://category_slide/whoosh_4.mp3");
  updateScreen();
});

onEvent("rankDropdown", "change", function( ) {
  playSound("sound://category_board_games/card_dealing_single.mp3");
});

onEvent("songInput", "click", function( ) {
  playSound("sound://category_pop/deep_bubble_notification.mp3");
});

function updateScreen(){
  setProperty("songsOutput", "text", songList.join("\n"));
}
