// Create and assign values to variables
var clicks = 0;

// When the button is clicked increase the clicks
// counter by 1 and change the star's color
onEvent("star", "click", function() {
  clicks = clicks + 1;
  setText("numClicks", clicks);

  if(clicks < 5){
    setProperty("star", "icon-color", "red");
  } else if (clicks < 9) {
    setProperty("star", "icon-color", "orange");
  }
    else if (clicks >= 14) {
    setProperty("star", "icon-color", "yellow");
    }
    else if (clicks >= 19) {
    setProperty("star", "icon-color", "green");
    // add more else-if statements here
    
  } else if (clicks >= 30) {
 	setProperty("star", "icon-color", "pink");
  }
});
