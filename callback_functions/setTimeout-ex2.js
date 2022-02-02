var timePeriod1 = 30000;
console.log("1st setTimeout - initiated (set for " + timePeriod1/1000 + " seconds)")
var timerId1 = setTimeout(() => {
    console.log("This function runs in " + timePeriod1/1000 + " seconds");
}, timePeriod1);


var timePeriod2 = 2000;
console.log("2nd setTimeout - initiated (set for " + timePeriod2/1000 + " seconds)");
var timerId2 = setTimeout(() => {
    console.log("1st setTimeout - cancelled (timerId: " + timerId1 + ")");
    clearTimeout(timerId1);
}, timePeriod2);
