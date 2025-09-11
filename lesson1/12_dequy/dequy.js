function giaithuat(number){
if(number >0){
    return number* giaithuat(number -1);

}
return 1;
}
console.log(giaithuat(6));