// Left Rotation Array

var arr = [1,2,3,4,5];

function rotationLeft(arr){
    var arrTemp = arr[0];
    arr.splice(0,1);
    arr.push(arrTemp);
    return arr;
}

// iteration for i in method
for(var i in arr){
    console.log(i);
}