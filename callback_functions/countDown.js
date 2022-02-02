function countDown(seconds) {
    var intervalId = setInterval(() => {
        if (seconds > 0) {
            console.log("Timer: ", seconds);
            seconds--;
        } else {
            clearInterval(intervalId);
            console.log("Ring Ring Ring!!!");
        }
    }, 1000);
}

countDown(5);
