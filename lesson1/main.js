//14. de quy
function giaithuat(number){
if(number >0){
    return number* giaithuat(number -1);

}
return 1;
}
console.log(giaithuat(6));
//13.filter x2

//  var course=[
//     {name:'huy',
//      age:22
//     },
//     { name:'anh',
//         age:21
//     },
//     {
//         name:'dang',
//         age:23
//     }

//  ]
//  var exage= course.filter(function(people,index,array){
//     return people.age>21; })

//      console.log(exage);

//12. foreach x2
// var course=[
//     'javascrip',
//     'ruby',
//     'c++',
//     'python'
// ]

// course.forEach(function(cs,index,array){
//     console.log(cs,index,array);
// })
//11.callback
// function goi1(param){
//     param('hoc lap trinh');
// }

// function goi2(value){
//     console.log('value :',value);
// }
// goi1(goi2);

// var course=[
//     'javascrip',
//     'ruby',
//     'c++',
//     'python'

// ]
//  var htmls= course.map(function(cs){
//     return `<h2>${cs}</h2>`
//  })
// console.log(htmls.join(', '))

//10.math object      
//  //10.1 Math.PI
//   console.log(Math.PI);
//   //10.2 Math.round()
//    console.log(Math.round(3.231));
//   //10.3 Math.abs()
//   console.log(Math.abs(-45.5));
//   //10.4 Math.ceil()
//   console.log(Math.ceil(4.11));
//   //10.5 Math.floor()
//   console.log(Math.floor(4.9));
//   //Math.random()
//   console.log(Math.floor(Math.random()*6));
// // Math.max();
// console.log(Math.max(-100,45,67));
// //Math.min();
// console.log(Math.min(-100,45,67));

  




// //9. lam viec voi mang
// var Hocsinh=[
//     {
//         id:1,
//         name:'huy',
//         coin:40
//     },
//      {
//         id:2,
//         name:'anh',
//         coin:0
//     },
//      {
//         id:3,
//         name:'dang',
//         coin:35
//     }
// ];


//-----------------------------------------------------------------------------
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
// var isfree=Hocsinh.some(function(hs,index){
//     console.log(index);
//     return hs.coin===0;
// });
// console.log(isfree)
//9.4find
//var course= Hocsinh.find(function(course,index){
//     console.log(index);
//     return course.name==='huy';
//  })
//  console.log(course.name);
//9.5 filter
// var course= Hocsinh.filter(function(student,index){
//     console.log(index);
//     return student.coin===0;
// }) ;
// console.log(course);
//9.6 map
// var course=Hocsinh.map(function(student,index){
// return student.coin*2;

// })
// console.log(course);
//9.7 reduce
// var toltal= Hocsinh.reduce(function(sum,student){
//     return sum +student.coin;
// },0);
// console.log(toltal);

// var listnumber=[1,[2,3],4,[5,6,7],8];
// var gopnumber=listnumber.reduce(function(numberlist,numberitem){
//     return numberlist.concat(numberitem);
// },[]);
//   console.log(gopnumber);
//9.8 includes
// var ten='phamf quoc huy';
// console.log(ten.includes('pham'));



//------------------------------------------------------------------------------
//.8. vong lap long nhau
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