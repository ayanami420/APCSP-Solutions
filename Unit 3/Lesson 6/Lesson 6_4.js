
onEvent("nextButton", "click", function( ) {
  setScreen("screen2");
  console.log("You clicked the next button!");
});

onEvent("backButton", "click", function( ) {
  setScreen("homeScreen");
  console.log("You clicked the back button!");
  console.log("test");
  setProperty("homeIcon", "width", 100);
  
});



