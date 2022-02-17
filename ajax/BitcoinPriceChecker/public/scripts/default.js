var btn = document.querySelector("#btn");
var pricing = document.querySelector("#price");

// Listen for clicks
btn.addEventListener("click", () => {
    // alert("CLICKED!");

    // Make the request
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if (XHR.readyState == 4 && XHR.status == 200) {
            // var result = JSON.parse(XHR.responseText).bpi.USD.rate_float;
            var result = parseFloat(JSON.parse(XHR.responseText).bpi.USD.rate_float).toFixed(2);
            // console.log(result);
            pricing.textContent = result;
        }
    };

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});
