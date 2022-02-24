var url = "https://randomuser.me/api/";

var fullnameDisp = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var city = document.querySelector("#city");
var email = document.querySelector("#email");

var btn = document.querySelector("#btn");

// Listen for clicks
btn.addEventListener("click", () => {
    // alert("CLICKED!");

    avatar.src = "https://images.unsplash.com/photo-1599169713100-120531cef331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayErrors);
});

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.status);
    }
    return response;
}

function parseJSON(response) {
    var result = response.json();
    return result.then(parsedData => {
        // console.log(parsedData.results[0]);
        return parsedData.results[0];
    })
}

function updateProfile(data) {
    var fullname = data.name.first + " " + data.name.last;
    fullnameDisp.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
}

function displayErrors(err) {
    console.log("INSIDE displayErrors!");
    console.log(err);
}


