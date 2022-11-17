// var let const

const pi = 3.1415;
console.log(pi);

const car = {
    color: "red",
    brand: "fiat",
    model: "500"
};

console.log(car);
console.log(car.model);

// object
const student = {
    firstname: "natia",
    lastname: "begdarashvili",
    age: 2,
    fullname: function (){
        return this.firstname + " " + this.lastname;
    }
};

console.log(student);
console.log(student.firstname);
console.log(student.fullname());

const meorest = {
    firstname: "daniil",
    lastname: "buligin",
    age: 5
};
// console.log(meorest.fullname());

let meorestfullname = student.fullname.bind(meorest);
console.log(meorestfullname());


// list
let xili = ["vashli", "msxali", "fortoxali", "mandarini"];

console.log(xili);
console.log(xili[0]);
console.log(xili[3]);

// xili[9] = "kiwi";
xili.push("kiwi");
xili.pop();
let xililength = xili.length;
console.log(xili[xililength - 1]);

for(let i=0; i<xili.length; i++){
    console.log(xili[i]);
}
