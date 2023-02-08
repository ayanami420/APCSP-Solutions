// Chronotype App
// Create Variables
var bedTime;
var wakeTime;
var sleeperType;


onEvent("generateButton", "click", function() {
  // Update Variables
  bedTime = getNumber("bedtimeDropdown");
  wakeTime = getNumber("waketimeDropdown");
  sleeperType = getText("sleeperTypeDropdown");
  

  
  // Check the value of variables to decide the profile
  if (sleeperType == "Light" && bedTime >= 11 && wakeTime <= 7) {
    setText("profileOutput", "Dolphin");
    setImageURL("profileImage",dolphinImageURL);
  } else if (bedTime == 12) {
    setText("profileOutput", "Wolf");
    setImageURL("profileImage",wolfImageURL);
  } else if (bedTime <= 10) {
    setText("profileOutput", "Lion");
    setImageURL("profileImage",lionImageURL);
  } else {
    setText("profileOutput", "Bear");
    setImageURL("profileImage",bearImageURL);
  }
  
  showElement("profileImage");
  showElement("profileOutput");
//
});

//Setup Image URLs
var dolphinImageURL = "https://images.code.org/39e02fbc9732c50489d8fe98f2487287-image-1648149317659.png"; 
var lionImageURL = "https://images.code.org/d6aceac1c6fe04b98f324f73e9c54b73-image-1648149248113.png";
var bearImageURL = "https://images.code.org/b85bcd26b426279bab54f95ecdd976d5-image-1648149365473.png";
var wolfImageURL = "https://images.code.org/453e2b681e88e189e240213c8b483d2f-image-1648149387368.png";
