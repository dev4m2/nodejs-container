// XMLHttpRequest module not defined/found
// https://stackoverflow.com/questions/32604460/xmlhttprequest-module-not-defined-found

// XMLHttpRequest is a built-in object in web browsers, but is not distributed with Nodejs.
// You must first install a third party implementation (i.e. "xhr2").
// npm install xhr2

var XMLHttpRequest = require('xhr2');
var XHR = new XMLHttpRequest();

// XHR.onreadystatechange = () => {
XHR.onreadystatechange = function() {
    // console.log("READY STATE IS..." + XHR.readyState);
    if (XHR.readyState == 4) {
        if (XHR.status == 200) {
            console.log(XHR.responseText);
        } else {
            console.log("There was a problem!");
        }
    }
};

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
