onEvent("calculateButton", "click", function() {
  var age = getText("ageDropdown");
  var price = 5;
  var day = getText("dayDropdown");
  var ticket = getText("discountInput");
  
  // Check the value of variables to decide the price to set
  if (age <= 19){
    price = 10;
  }
  else{
  }
  if ((ticket == "FREEFRIDAY") && (day == "Friday")) {
    price = 0;
  }
  
  // Create the text for the ticket
  var text = "Day: " + day + "\nAge: " + age + "\nPrice: $" + price;
  setText("ticketOutput", text);
  
  // Set the text on the screen

});
