import fetch from "node-fetch";

var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then((response) => {
    console.log(response);
    return response.json();
})
.then((data) => {
    console.log(data.bpi.USD.rate);
});
