var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});

promise.then((data) => {
    console.log("Random int passed to resolve: ", data);
});
