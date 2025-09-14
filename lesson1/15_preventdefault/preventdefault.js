var geta= document.links;
for(var i=0;i<geta.length;i++){
    geta[i].onclick=function(e){
        if(!e.target.href.startsWith('https://google.com')){
            e.preventDefault();
        }
    }
}