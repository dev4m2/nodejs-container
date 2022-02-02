function countDown1(num) {
    var timer = setInterval(function(){
        num--
        console.log("Timer: " + num);
        if (num === 1) {
            console.log("Ring Ring Ring!!!");
            clearInterval(timer);
        }
    }, 2000)
}


function countDown2(timeInSeconds){
    var intervalId = setInterval(function(){
        console.log("remaning time: "+timeInSeconds);
        timeInSeconds--;
        if(timeInSeconds === 0 ){
            clearInterval(intervalId);
            console.log("Ring, Ring, Ring!!!");
        }
    }, 1000);
}


function countDown3(time) {
    let num = time - 1;
    const intervalId = setInterval(() => {
        if(num === 0) {
            console.log("Ring Ring Ring!");
            return clearInterval(intervalId);
        }
        console.log('Timer: ' + num);
        num--;
    }, 1000);
}


countDown3(5);
