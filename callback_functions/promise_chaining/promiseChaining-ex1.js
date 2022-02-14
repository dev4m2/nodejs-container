var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 3000);
});

promise.then((data) => {
    console.log("Random int passed to resolve: ", data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 10));
        }, 500);
    });
}).then((data) => {
    console.log("Second random int passed to resolve: ", data);
});