var getText= document.querySelector('h1');
getText.onclick =function(){
    getText.classList.add('red');
}


var getText= document.querySelectorAll('h1');

for(var i=0;i<getText.length;i++){
    getText[i].onclick=function(e){
e.target.classList.add('red');

    }
}


var examEvent= document.querySelector('input[type="checkbox"]');
examEvent.onchange= function(){
    console.log(examEvent.checked);
}


var examEvent= document.querySelector('input[type="text"]');
examEvent.onkeydown= function(e){
    console.log(e.target.value);
}