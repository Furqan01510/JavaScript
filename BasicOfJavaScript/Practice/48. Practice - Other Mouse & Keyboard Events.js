//Other Mouse & Keyboard Events

var outerDiv = document.getElementById('outer');

outerDiv.addEventListener('mouseover',function(){
    console.log('Mouse Over');
});

outerDiv.addEventListener('mouseout',function(){
    console.log('Mouse out');
});

var searchDiv = document.getElementById('search');

searchDiv.addEventListener('keypress',function(){
    console.log('Key Press');
});

searchDiv.addEventListener('keydown',function(){
    console.log('Keydown Press');
});

searchDiv.addEventListener('ketup',function(){
    console.log('Keyup Press');
});

searchDiv.addEventListener('keypress',function(event){
    console.log('Key Press',event.KeyCode);
});
