console.log("please do not spam the button, it will spam the api :(");
var time = getTime();
var s = new Date(time).toLocaleTimeString("en-US");
onEvent("cityView", "click", function() {
    open("https://textbin.net/raw/7hg6athghh");
});
onEvent("search", "click", function() {
    updateScreen();
});

function updateScreen() {
    var city = getText("locInput");
    readRecords("Daily Weather", {
        City: city,
        "Forecast Number": 1
    }, function(records) {
        for (var i = 0; i < records.length; i++) {
            if (records[i]["Main Condition"] == "Thunderstorm" || "Rain" || "Drizzle") {
                setText("label", "City: " + city + "\nTime: " + (s));
                setText("label2", "use an umbrella and drive with caution! make sure to check your radars and GPS!");
                hideElement("weatherSun");
                hideElement("snow");
                showElement("rain");
            }if (records[i]["Main Condition"] == "Snow") {
                setText("label", "City: " + city + "\nTime: " + (s));
                setText("label2", "dress appropiately and drive with caution! make sure to check your news station for closures!");
                hideElement("weatherSun");
                hideElement("rain");
                showElement("snow");
            }else{ 
                setText("label", "City: " + city + "\nTime: " + (s));
                setText("label2", "enjoy the day and the weather!");
                showElement("weatherSun");
                hideElement("rain");
                hideElement("snow");
            }
        }
    });

}
