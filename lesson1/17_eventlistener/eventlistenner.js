var geta= document.querySelector('h1');

function viec1(){
    console.log('viec 1');

}
function viec2(){
    console.log('viec 2');
    
}
geta.addEventListener('click',viec1);
 setTimeout(function(){
geta.addEventListener('click',viec2);
    
 },3000);

