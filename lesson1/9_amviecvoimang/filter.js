var course= Hocsinh.filter(function(student,index){
    console.log(index);
    return student.coin===0;
}) ;
console.log(course);