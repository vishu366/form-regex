// let reactange = {
//   length: 5,
//   breath: 7,
//   area: function(){
//     return this.length* this.breath
//   }
// }

// console.log(reactange.length);
// console.log(reactange.breath);
// console.log(reactange.area())

// function bankAccount(){
//   let balance = 5000;
//   return{


//     getbalance(otp){
//       if(otp==="2778"){
//         console.log("your bank account is ", balance);
//       }
//       else{
//         console.log("incorrect otp ")
//       }

//     },
//     deposit(amount){
//       balance+= amount;
//       console.log("you have sucessfully deposit amount", amount);
//       console.log("your current balance is", balance);
//     },
//     withdrawl(amount){
//       balance-= amount;
//       console.log("your account has debited with", amount);
//       console.log("your current balance is", balance);
//     }


//     }
// } 

// let myAccount = new bankAccount();
// // myAccount.deposit(1000);
// // myAccount.withdrawl(2000);
// myAccount.getbalance("4456");

// function Car(company, model, brand){
//   this.company= company;
//   this.model= model;
//   this.brand= brand
// }

// let hondacar = new Car("honda civic", 2022, "maruri");
// console.log(hondacar.brand, hondacar.company);


function bankAccount() {
  let balance = 5000;
  let currentotp = "";

  function genrateotp(otp) {
    if (otp === currentotp) {

      currentotp = Math.floor(Math.random() * 9000 + 1000).toString();
      console.log("your otp is", currentotp);
}

  }
  // genrateotp();
  return {
    getbalance(otp) {
      if (otp === currentotp)
        console.log("your bank balance is ", balance)
      else
        console.log("incorret otp")
    },
    deposit(amount) {
      balance += amount;
      console.log("you have sucessfully deposit amount", amount)
      console.log("your current balance is ", balance)
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("insufficent balance")
      }
      else {
        balance -= amount;
        console.log("Your account has been debited by amount", amount);
        console.log("Your current balance is", balance);
        genrateotp(); // Regenerate OTP after withdrawal
      }
    }




  }
  genrateotp();



}




let myAccount = new bankAccount;
myAccount.deposit(2000);
// myAccount.withdraw(500);
// myAccount.genrateotp("5588");
// myAccount.getbalance("5588")
// myAccount.getbalance("9045")


