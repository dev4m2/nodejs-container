// ReferenceError: fetch is not defined
// https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined

// fetch() is a built-in object in web browsers, but is not distributed with Nodejs.
// You must first install a third party implementation (i.e. "node-fetch").
// npm install node-fetch

import fetch from "node-fetch";

var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then((data) => {
    console.log(data);
    console.log("status code was: " + data.status);
});