/*
Title:HangMan
Purpose:Play Game
Date: 27 Aug 2020
Author: Oleg Eremeev
*/


var secretWords = [
    "cat",
    "dog",
    "bat",
    "rat"
];
console.log(secretWords);

const underScores = document.querySelector('#underScores');
console.log(underScores);
const form = document.querySelector('#char');
console.log(form);
const buttonClicked = document.querySelector('#pressed')
console.log(buttonClicked);



var nowSecretWord = secretWords[Math.floor(Math.random() * secretWords.length)];

let answerArray = [];

for (var a = 0; a < nowSecretWord.length; a++) 
{
  answerArray[a] = "_";

//   const parent = document.querySelector('#listOfPosts');
//   const newLI = document.createElement('LI');
//   const newART = document.createElement('ARTICLE');
//   const newH2 = document.createElement('H2');
//   newH2.textContent = this.title;
//   const newP = document.createElement('P');
//   newP.textContent = this.content;
//  // const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
//  // timeStamp = document.createElement('TIME'); 
//   newART.appendChild(newH2);
//   newART.appendChild(newP);
//   newLI.appendChild(newART);
//   //newP.appendChild(timeStamp);
//   parent.appendChild (newLI);  

}

var remainingLetters = nowSecretWord.length;

