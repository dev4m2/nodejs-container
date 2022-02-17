var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

// Listen for clicks
btn.addEventListener("click", () => {
    // alert("CLICKED!");

    // Make the request
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var url = JSON.parse(XHR.responseText).message;
            // console.log(url);
            img.src = url;
        }
    };

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
});
