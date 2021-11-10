/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

// 2. Store the rank of a player

let result1 = "wrong";
let result2 = "wrong";
let result3 = "wrong";
let result4 = "wrong";
let result5 = "wrong";
let rank = 0;
let medal = "No medal";

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

// Question 1

let answer1 = prompt("Which team won the Premier League in 1992-93?");

if ( answer1.toLowerCase() === "man u" || answer1.toLowerCase() === "man utd" || answer1.toLowerCase() === "manchester united") {
  result1 = "right";
  rank += 1;
}

// Question 2

let answer2 = prompt("Which team won the Premier League in 1994-95?");

if ( answer2.toLowerCase() === "blackburn" || answer2.toLowerCase() === "blackburn rovers") {
  result2 = "right";
  rank += 1;
}

// Question 3

let answer3 = prompt("Which team won the Premier League in 1997-98?");

if ( answer3.toLowerCase() === "arsenal") {
  result3 = "right";
  rank += 1;
}

// Question 4

let answer4 = prompt("Which team won the Premier League in 2004-05?");

if ( answer4.toLowerCase() === "chelsea") {
  result4 = "right";
  rank += 1;
}

// Question 5

let answer5 = prompt("Which team won the Premier League in 2011-12?");

if ( answer5.toLowerCase() === "man city" || answer5.toLowerCase() === "manchester city") {
  result5 = "right";
  rank += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( rank >= 5 ) {
  medal = "Gold";
} else if ( 3 <= rank && rank < 5 ) {
  medal = "Silver";
} else if ( 1 <= rank && rank < 3 ) {
  medal = "Bronze";
} else {
  medal = "No medal";
}
  
// 3. Select the <main> HTML element
// 6. Output results to the <main> element

document.querySelector('main').innerHTML = `
<p>Man Utd won the Premier League in 1992-93. You got this ${result1}.</p>
<p>Blackburn won the Premier League in 1994-95. You got this ${result2}.</p>
<p>Arsenal won the Premier League in 1997-98. You got this ${result3}.</p>
<p>Chelsea won the Premier League in 2004-05. You got this ${result4}.</p>
<p>Man City won the Premier League in 2011-12. You got this ${result5}.</p>

<p>Your overall score is ${rank}... ${medal}!</p>`;

