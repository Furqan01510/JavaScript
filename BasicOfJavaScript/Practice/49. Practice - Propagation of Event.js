// Propagation of Event
//event.stopPropagation();

var outerDiv = document.getElementById('outer');
var innerDiv = document.getElementById('inner');

outerDiv.addEventListener('click',function(event){
    console.log('Outer');
    event.stopPropagation();
});

innerDiv.addEventListener('click',function(){
    console.log('Inner');
    event.stopPropagation();
});

document.addEventListener('click',function(){
    console.log('Document');
});
