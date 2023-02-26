// Days of the Week

var WeekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function returnDay(x){
    return (x<1) || (x>7) ? null : WeekDays[x];
}
console.log(returnDay(3));