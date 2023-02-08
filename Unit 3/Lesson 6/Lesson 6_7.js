// When the user clicks the cat button 
// play a meow sound and show cat image and text
onEvent("catButton", "click", function( ) {
  setProperty("messageLabel", "text", "Cats Rule!");
  playSound("sound://category_animals/cat.mp3");
  setProperty("petImage", "image","https://cdn.pixabay.com/photo/2018/11/29/23/34/cat-3846780_960_720.jpg");
});

// When the user clicks the dog button 
// play a woof sound and shows dog image and text
onEvent("dogButton", "click", function( ) {
  setProperty("messageLabel", "text", "Dogs #1!!");
  playSound("sound://category_animals/dog.mp3");
  setProperty("petImage", "image", "https://images.code.org/daddf6bc7178431319afe019049b2fd5-image-1624567529598.jpg");
});
