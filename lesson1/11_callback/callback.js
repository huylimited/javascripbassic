function goi1(param){
    param('hoc lap trinh');
}

function goi2(value){
    console.log('value :',value);
}
goi1(goi2);

var course=[
    'javascrip',
    'ruby',
    'c++',
    'python'

]
 var htmls= course.map(function(cs){
    return `<h2>${cs}</h2>`
 })
console.log(htmls.join(', '))