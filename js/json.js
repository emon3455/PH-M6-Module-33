const student ={
    name: "Emon",
    address:{
        area:"Mohakhali",
        city:"Dhaka",
        Country:"Bangladesh",
    },
    cgpa:3.82,
    isSingle: true,
    isHappy: false,
    dreams: ["To Be a Software Enginner", "To be a good husband","To be a good human bing"],
}

// for converting js variable or object in json:
const studentJson = JSON.stringify(student);
//console.log(studentJson);

// for converting JSON Into js element:
const newStudent = JSON.parse(studentJson);
//console.log(newStudent);

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 