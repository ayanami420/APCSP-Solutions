var clicks = 0;

onEvent("star", "click", function() {
  clicks = clicks + 1;
  setText("numClicks", clicks);

  if(clicks < 5){
    setProperty("star", "icon-color", "red");
  }
  else if (clicks > 5) {
    setProperty("star", "icon-color", "orange");
  }

});
