var p1 = new Promise((resolve, reject) => {
    reject("ERROR");
});

p1.then((data) => {
    console.log("Promise p1 resolved with data: ", data);
}).catch((data) => {
    console.log("Promise p1 was rejected with data: ", data);
});
