//9. lam viec voi mang
var Hocsinh=[
    {
        id:1,
        name:'huy',
        coin:0
    },
     {
        id:2,
        name:'anh',
        coin:0
    },
     {
        id:3,
        name:'dang',
        coin:3
    }
];



//9.1 foreach

// Hocsinh.forEach(function(hs,index){
//     console.log(index,hs);

// });// callback
//9.2 every-> nhu tim dieu kien true false
// var isfree=Hocsinh.every(function(hs,index){
//     console.log(index);
//     return hs.coin===0;

// });
// console.log(isfree);
//9.3 some 
var isfree=Hocsinh.some(function(hs,index){
    console.log(index);
    return hs.coin===0;
});
console.log(isfree)


//8. vong lap long nhau
// var number=[
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// ;
// for(var i=0;i<number.length;i++){
//     for(var j=0;j< number.length-1;j++){
//         console.log(number[i][j]);
//     }
// }



//-------------------------------------------------------------------
//7 break va continue
// for(var i=0;i<10;i++){
// if(i%2 !==0){
//     continue;
// }

//     console.log(i);

// }

// -----------------------------------------------------------------
//6. vong lap
// 6.1   for
// for(var i=1;i<10;i++){
//   console.log(i);
// }

// var arraylengh=[
//     'javascrip',
//     'c++',
//     'python',
//     'ruby'
// ]
// chieudai=arraylengh.length;

// for(var i=0;i<chieudai;i++){
//     console.log(arraylengh[i]);
// }
//6.2 for in
// var myinfo={
//     ten:'huy',
//     ho:'pham',
//     diachi:'hatinh',
//     tuoi:22
// }
// for(var key in myinfo){
//     console.log(myinfo[key])
// }

// var myString='javascrip';
// for(var key in myString){
//     console.log(myString[key])
// }
//6.3 for of
// var arraylengh=[
//     'javascrip',
//     'c++',
//     'python',
//     'ruby'
// ]
// console.log(Object.values(arraylengh));

// for(var value of Object.values(arraylengh)){
//     console.log(value);

// }

//6.4 while
// var i=0;
// while(i<100){
//     i++;
//     console.log(i);
// }
//6.5 do while
// var i=0;
// isSucces=false;

// do{
//     i++;
//     console.log(i);
//     if(true){
//         isSucces=true;
//     }
    
// }while(!isSucces && i<3);
//--------------------------------------------------------------------------
//5. toan tu 3 ngoi
// var course={
//     name:'javascrip',
//     coin:250
// }
// if(course.coin > 0){
//     console.log(`${course.coin} coin`);
// }else   {
//     console,log('khong co tien');
// }

// var tien=course.coin>0 ?`${course.coin}Coin`:'khong co tien';
// console.log(tien);



// ----------------------------------------------------------------------
// 4.switch case
// var date=new Date().getDay();
// switch(date){
//     case 2:
//         console.log('hom nay la thu 2');
//         break;
//      case 3:

//         console.log('hom nay la thu 3');
//         break;

//      case 4:
//         console.log('hom nay la thu 4');
//         break;

//         default:
//             console.log('khong biet')

// }



// -----------------------------------------------------------------
 //3. if else
// var date=new Date().getDate();

// if(date===10){
//     console.log('hom nay la ngay thu 4');


// }else if(date===9){
//     console.log('hom nya la thu 3')
// }
// else{
//     console.log('hi')
// }



//-----------------------------------------------------------------
// 2.doi tuong date
// 
// var date=new Date();   // khoi tao doi tuong dang object
// var year=date.getFullYear(); // lay nam
// var month=date.getMonth()+1;// lay thang
// var day=date.getDate();//lay ngay
// var hours=date.getHours(); //lay gio
// console.log( hours);


// ----------------------------------------------------------
// 1 .prototype
// doi tuong nguyen mau, cac doi tuong duoc add co the dung chung
// function  User(firstName,lastName,avatar){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.avatar=avatar;
//     this.getName=function(){
//         return `${this.firstName}${this.lastName}`;
//     }

// }
// User.prototype.className='f8';

// var user1=new User('huy','pham','avt1');
// var user2=new User('anh',"le",'avt2');
// console.log(user1);
// console.log(user2);