onEvent("quoteInput", "input", function( ) {
  var text = getText("quoteInput");
  setText("quoteOutput", text);
});
onEvent("fontFamilyInput", "click", function( ) {
    var option = getText("fontFamilyInput");
    setProperty("quoteOutput", "font-family", option);
    
});
onEvent("colorInput", "click", function( ) {
    var color = getText("colorInput");
    setProperty("colorOutput", "background-color", color);
    
});
onEvent("fontSizeInput", "click", function( ) {
    var size = getNumber("fontSizeInput");
    setProperty("quoteOutput", "font-size", size);
    
});
