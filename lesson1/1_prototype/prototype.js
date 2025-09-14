// 1 .prototype
// doi tuong nguyen mau, cac doi tuong duoc add co the dung chung
function  User(firstName,lastName,avatar){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avatar=avatar;
    this.getName=function(){
        return `${this.firstName}${this.lastName}`;
    }

}
User.prototype.className='f8';

var user1=new User('huy','pham','avt1');
var user2=new User('anh',"le",'avt2');
console.log(user1);
console.log(user2);