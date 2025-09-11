
 var course=[
    {name:'huy',
     age:22
    },
    { name:'anh',
        age:21
    },
    {
        name:'dang',
        age:23
    }

 ]
 var exage= course.filter(function(people,index,array){
    return people.age>21; })

     console.log(exage);
