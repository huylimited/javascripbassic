var course={
    name:'javascrip',
    coin:250
}
if(course.coin > 0){
    console.log(`${course.coin} coin`);
}else   {
    console,log('khong co tien');
}

var tien=course.coin>0 ?`${course.coin}Coin`:'khong co tien';
console.log(tien);
