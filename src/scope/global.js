//variables

var a; //declarando

var b = 'b'; // declaramos / asignamos
b = 'bb'; //reasignacion
var a = 'aa'; // redeclaracion

//Global scope

var fruit = 'apple'; // global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = 'Colombia'; // global
  console.log(country);
}

countries();
console.log(country);
