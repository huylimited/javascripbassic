var course= Hocsinh.find(function(course,index){
    console.log(index);
    return course.name==='huy';
 })
 console.log(course.name);