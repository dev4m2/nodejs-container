var counter = 0;
function incCounter() {
    counter++;
    console.log("Counter: ", counter);
}

function runLater(callback, timeInMs) {
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            var res = callback();
            resolve(res);
        }, timeInMs);
    });
    return p;
}

runLater(incCounter, 1000).then(() => {
    return runLater(incCounter, 2000);
}).then(() => {
    return runLater(incCounter, 3000);
}).then(() => {
    // final .then not necessary
    console.log("Finis");
});