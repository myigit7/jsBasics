let diesel =24.53, gas = 22.25, lpg = 11.1;
const newLine = "\r\n";

const gasLine = "1- Diesel" +newLine
+"2-Gas" +newLine
+"3-LPG"+newLine
+"Choose your gas type."

let gasType = prompt(gasLine);
let gasLiter = Number(prompt("How much litre do you want?"));
let balance = Number(prompt("How many balance do you have?"));

if(gasType==1){
      //DIESEL
      let totalAmount = diesel*gasLiter
      if(totalAmount<balance){
        balance = balance - totalAmount;
        alert("You can get your gas"+newLine
          +"New Balance : " + (balance-totalAmount));
      }else {
        alert("Your balance not enough to pay" + newLine
          +"Your amount is :" + totalAmount+newLine
          +"Balance is :" + balance+ newLine
          + "You should pay :" + (totalAmount-balance));
      }
}else if(gasType==2){
  //gas
}else if(gasType==3){
    //LPG
}else{
  alert("Please enter exist gas type!");
}