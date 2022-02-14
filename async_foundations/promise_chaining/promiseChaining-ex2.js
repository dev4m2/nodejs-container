var promise = new Promise((resolve, reject) => {
    resolve(5);
});

promise.then((data) => {
    return data * 2;
}).then((data) => {
    return data + 20;
}).then((data) => {
    console.log(data);
});