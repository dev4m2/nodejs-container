var counter = 0;
setTimeout(() => {
    counter++;
    console.log("Counter: ", counter);
    setTimeout(() => {
        counter++;
        console.log("Counter: ", counter);
        setTimeout(() => {
            counter++;
            console.log("Counter: ", counter);
        }, 3000);
    }, 2000);
}, 1000);