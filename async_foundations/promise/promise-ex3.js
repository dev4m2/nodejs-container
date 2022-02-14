var p1 = new Promise((resolve, reject) => {
    var num = Math.random();
    if (num < 0.5) {
        resolve(num);
    } else {
        reject(num);
    }
});

p1.then((result) => {
    console.log("Success: ", result);
}).catch((error) => {
    console.log("Error: ", error);
});
