function square(n) {
    return n * n;
}

setTimeout(() => {
    console.log("Callback was placed", "on the queue");
}, 0);

console.log(square(2));
