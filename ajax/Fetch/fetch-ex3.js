import fetch from "node-fetch";

var url = "https://api.coindesk.com/v1/bpi/currentprice.jsonXXX";

fetch(url)
.then(handleErrors)
.then((request) => {
    console.log("EVERYTHING IS FINE!");
    console.log(request);
})
.catch((error) => {
    console.log(error);
});

function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
}
