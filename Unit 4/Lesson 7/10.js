var age = getText("ageNumber");
var money = getText("moneyNumber");

onEvent("adoptButton", "click", function() {
  // resets the images each time adoptButton is clicked
  hideElement("yesCat");
  hideElement("noCat");
  
  // update the variables here
  
  
  // write Expression below that checks if age is over 14 and money equals 40
  if ((age > 14) && (money >= 40)) {
    showElement("yesCat");
  } else {
    showElement("noCat");
  }
});

