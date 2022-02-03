var p1 = new Promise((resolve, reject) => {
    resolve([1,2,3,4]);
});

p1.then((arr) => {
    console.log("Promise p1 resolved with data: ", arr);
});
