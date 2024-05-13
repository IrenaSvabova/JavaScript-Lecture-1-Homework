let income = 15000;
let expenses = 9561; 
let savings = 4000;
//expenses = 14000;

let remainingBalance = income - expenses;
if (remainingBalance < savings) {
  console.log("Income:"+income+`, `+"Expenses:"+expenses+", "+"Sorry, you didn't met your saving goals");
}
else {console.log("Income:"+income+`, `+"Expenses:"+expenses+", "+"Hooray, you met your saving goals!")}




