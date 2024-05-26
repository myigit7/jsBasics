let number = prompt("Please enter a number between 1 to 5");

switch (
  number // bildiğimiz üzere prompt'tan aldığımız inputlar string şekilde geliyor bundan dolayı biz case kısmına string yazıyoruz ki eşleşme sağlansın
) {
  case "1":
    console.log("Entered a number is 1");
    break;

  case "2":
    console.log("Entered a number is 2");
    break;

  case "3":
    console.log("Entered a number is 3");
    break;

  case "4":
    console.log("Entered a number is 4");
    break;

  case "5":
    console.log("Entered a number is 5");
    break;

  default:
    console.log("Please enter a number between 1 to 5");
    break;
}
