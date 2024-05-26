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

// -------------------- ARITHMETIC OPERATORS --------------

/*
% --> mode operator
*/

console.log(10 % 3); // This operator gives the result which is how much "3" have in the 10 than gives the quick results.
console.log(12 % 5);

// ++ ----> Adding the number which do you use the calculation or whereever you want to increasing one

let z = 10;
z++;
// console.log(z); // see the result 11

z--;

console.log(z);

// ** ----> üslü işlem yapmamızı sağlıyor.

// ---------- ATAMA OPERATORU ----------

/*
    = --> atama opertörü
    == --> eşittir ama veri tiplerini takmıyor, içlerindeki veriler eşit mi ona bakıyor.
*/
console.log(1 == "1"); // th result gives "true"
/*
    === --> eşittir ama hem içine hemde datatipine bakıyor.
*/

/*
    += --> numarayı arttırmaya yarıyor mesela sayı+=2 dediğimizde sayı değişkenini 2 arttır demiş olduk.
    -= --> numarayı azaltmaya yarıyor mesela sayı-=2 dediğimizde sayı değişkenini 2 azalt demiş olduk.
    *= --> numarayı arttırmaya yarıyor mesela sayı*=2 dediğimizde sayı değişkenini 2 ile çarp demiş olduk.
    /= --> numarayı arttırmaya yarıyor mesela sayı/=2 dediğimizde sayı değişkenini 2 ile böl demiş olduk.
    %= --> mode alma işleminin kısaltması
    **= --> üslü işlemi kısaltmasıdır.
*/

// -------------- MANTIKSAL OPERATOR ----------------

/*
    && : and ( birden fazla condition olduğunda hepsinin true olması lazım en az bir tanesi false olursa hepsi false olur. )
    || : or
    !  : not operator
*/

let deneme = {
  name: "yigit",
  surname: "metin",
  data: 123,
};

console.log(typeof deneme);

// ---------------------- POP-UP SCREEN (DIALOG SCREEN) -------------------

/*
- Alert
- Prompt
- Confirm

hepsi "window" objesi içerisinde mevcut ve window.alert-prompt-confirm diye yazabiliriz ama zaten window nesnesinin içinde tüm işlemleri yaptığımız için başına 
window eklemeden methodu çağırabiliriz.
*/

// FUNCTION

// alert("Nasılsın?..");

// prompt(); bizimkullanıcıdan input değer almamızı sağlar. Kullanıcıdan ne değer alırsak alalım o değer her zaman "string" data tipindedir. Eğer String
// olarak kullanmak istemiyorsak data tipini değiştirmek istiyorsak data conversation kullanabiliriz.

// prompt("Enter your name...");

let namee = prompt("Enter your name...");
console.log(namee);

// confirm de bir mesaj gönderiyoruz ekrana ve bize boolean bir değer gönderiyor.

// confirm("Silmek istediğinize emin misiniz?");

let message = (confirm("Are you want to delete it?"));
console.log(message);
