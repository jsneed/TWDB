var request = require('request');
/*
request("http://www.google.com", function (error, response, body) {
    if(error)
    {
        console.log(error);
    }
    else
    {
        if(response.statusCode == 200)
        {
            console.log(body); // Show the HTML for the Google homepage.
        }
        else console.log("Status Code: " + response.statusCode);
    }
});
*/

var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

request(url, function (error, response, body) {
    if(!error && response.statusCode == 200)
    {
        //Convert to object since what we get back is a string
        var parsedData = JSON.parse(body);

        //console.log(parsedData);
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
    }
});
