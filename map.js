let students = [{
    name: "sabrina",
    age:11,
    gender : 'p',
    hobby: [`swimming`,`running`]
},{
    name: "budi",
    age:12,
    gender : 'l',
    hobby: [`watching`,`eating`]
},{
    name: "alex",
    age:26,
    gender : 'l',
    hobby: [`soccer`,`running`]
}];


//ForEach
let newStudents = students.map(function (student){

    let gender;
    if (student.gender == 'l'){
        gender = 'Mr. ';
    }else{
        gender = 'Ms. ';
    }
    return{
        name: gender + student.name,
        age : student.age,
        hobby: student.hobby,
    };
});

console.log(newStudents);
