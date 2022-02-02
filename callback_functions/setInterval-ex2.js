var num = 0;
var intervalId = setInterval(() => {
    num++;
    console.log("num: ", num);
    if (num === 4) {
        console.log("Clear interval ID: " + intervalId);
        clearInterval(intervalId);
    }
}, 1000);
