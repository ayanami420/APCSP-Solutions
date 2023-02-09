onEvent("rollButton", "click", function( ) {
  var odds = 0;
  var evens = 0;
  for(var i = 0; i < 20; i++){
    var roll = randomNumber(1,6);
    setProperty("dice"+i,"text",roll);
    setProperty("dice"+i,"border-width",1);
    
    if((roll == 1) || (roll == 3) || (roll == 5)){
      odds++;
      setProperty("dice"+i,"border-color", "black");
    }
    else{
      evens++;
      setProperty("dice"+i,"border-color", "white");
    }
    setProperty("informationLabel","text","Total Odds: " + odds + "\nTotal Evens: "+ evens);
  }
});
