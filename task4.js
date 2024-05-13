/*
1. Declaring String Variables:
Declare three string variables using different types of quotation marks (single, double, and backticks). Include at least one apostrophe in one string and one quotation mark in another, using escape characters.*/
let myName = "Irena Svabova's favorite book";
let favoriteBook = 'Big Panda and Tiny Dragon';
let favoriteQuote = `\"What is my purpose?\" asked Tiny Dragon. Big Panda paused and said, \"To sit on that stone and be with your friend.\"`

console.log(myName);

/*String Concatenation:
2. Create two string variables, greeting and place. Concatenate them to form the sentence "[greeting], welcome to [place]" and print the result using console.log.*/

let greeting = `Hello`;
let place = `Tokyo`;

console.log(greeting+ ", welcome to " +place+ "!");

/*
Using Escape Characters:

3. Write a string that includes both single and double quotes inside it, such as a quote within a dialogue. Use escape characters to ensure the string is declared correctly and print it.*/

let quote = '\"I want to change the world,"\ said the Tiny Dragon. \n \"Start with the next person who needs your help,"\ replied the Big Panda.'

console.log(quote);

/*String Concatenation with Variables:

4. Declare a variable for a user's name and another for a specific year. Construct and print a string like "Hello, [name]! The year is [year]."*/

let userName = "Irena Svabova";
let year = 2024;

console.log("Hello, "+userName+"! The year is "+year+".");

/*Appending Strings with Variables:

5. Start with a string "I am learning", then use the += operator to add " JavaScript" to it. Print the final result.*/ 

let myString = "I am learning ";
myString += "JavaScript";
console.log(myString);

/*Finding String Length:
6.Declare a string variable with the phrase "JavaScript is powerful". Use the .length property to find the length of the string and print it.*/
let measureLenght = "JavaScript is powerful."
measureLenght.length;

/*Dynamic String Construction:
7. Use string concatenation to construct a string that describes your favorite activity. For example, if the activity is coding and the duration is 2 hours, the string could be: "I enjoy coding for 2 hours daily."*/
let favoriteActivity = "I enjoy reading ";
let duration = "for 3 hour every day."; 
favoriteActivity += duration; 

/*Using Bracket Notation for Character Access:
8. Display the first and last character of the user's full name.*/
 let usersFullName = "Irena Svabova";
 console.log(usersFullName[0]+", "+usersFullName[usersFullName.length - 1]);

 /*Demonstrate String Immutability:
9. Try to change a character within the user's name using bracket notation, display the result to show immutability.*/
let name = "Pinelope";
name = name.replace(name[1], "e");
console.log(name);
