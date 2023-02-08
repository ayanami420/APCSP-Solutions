console.log("Starting my program!");
onEvent("bigButton", "click", function( ) {
  setProperty("bigButton", "background-color", "blue");
  setProperty("bigButton", "height", 200);
  setProperty("bigButton", "text", "Now it's a bigger button!");
  console.log("You clicked the button!");
  setProperty("bigButton","text","fart");
});
console.log("Ending my program!");
