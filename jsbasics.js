/* 
? How many types of data do JS have?

! DATA TYPES:
--------- PRIMITIVE DATA TYPE-----------
String
Number
Boolean (true and false)
Null
Undefined
---------- REFERENCE DATA TYPE ------------
Object
Function

*/

let name1 = "Yigit"; // ----------> String

let number = 87;
let numberStringg = "87"; // Mentioned that if you want string number like "12" instead of the real number like 12, you must use double quote.

console.log(number + numberStringg); // This can give an output as 8787.

// !BOOLEAN
/*
let a = 23;
let b = 12;

let sonuc = a+b;
console.log(sonuc = 35);
*/

// ? NULLLLLL ( boş demektir. Bir variable'ın içini boşaltmak için kullanılır. )

/*
let a = null;

a=23;

console.log(a);
*/

// TODO ///// UNDEFINED (Tanımsız veri tipidir.)

/*
let a;
console.log(a);
*/

// ------------ OBJECT ----------
let human = {
  name: "Yigit",
  surname: "Metin",
  age: 24,
};

console.log(human);

// ----------- FUNCTIONS ---------

function rewrite() {
  if (24 > 23) {
    console.log("You cannot passed :(");    
  }
}

console.log(rewrite);
