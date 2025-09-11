var toltal= Hocsinh.reduce(function(sum,student){
    return sum +student.coin;
},0);
console.log(toltal);

var listnumber=[1,[2,3],4,[5,6,7],8];
var gopnumber=listnumber.reduce(function(numberlist,numberitem){
    return numberlist.concat(numberitem);
},[]);
  console.log(gopnumber);