let students = [{
    name: "sabrina",
    age:11,
    hobby: [`swimming`,`running`]
},{
    name: "budi",
    age:12,
    hobby: [`watching`,`eating`]
},{
    name: "alex",
    age:26,
    hobby: [`soccer`,`running`]
}];


//ForEach
let adult = [];
students.forEach(function(student){
    if (student.age >= 17){
        adult.push(student);
    }
});
console.log(adult);

//Filter
let adult2 = students.filter(function (el){
    return el.age <= 17;
});
console.log(adult2);

