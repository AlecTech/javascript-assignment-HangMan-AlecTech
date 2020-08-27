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

var underScores = document.querySelector('#underScores');
console.log(underScores);
var form = document.querySelector('#char');
console.log(form);
var buttonClicked = document.querySelector('#pressed');
console.log(buttonClicked);
var counter = document.querySelector('#counter');
console.log(counter);
var char = document.querySelector('#wrongLetters');
console.log(char);



var nowSecretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
console.log(nowSecretWord);
var answerArray = [];

for (var a = 0; a < nowSecretWord.length; a++) 
{
  
const newDash = document.createElement('SPAN');  
      newDash.textContent = "_ ";
      underScores.appendChild(newDash);

}

var remainingLetters = nowSecretWord.length;
//if statment to append counter in string format (appendChild didn't work)
if (nowSecretWord.length > 0)
{   
    console.log(nowSecretWord);
    var b = nowSecretWord.length;
    attempts = b + 6;

    let tempCounter = document.getElementById('counter');
    console.log(tempCounter);
    tempCounter.innerText = `Attempts Left: ${attempts}`;
}



// ================MAIN GAME LOGIC STARTS HERE=================== //

//   newP.textContent = this.content;
//  // const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
//  // timeStamp = document.createElement('TIME'); 
//   newART.appendChild(newH2);
//   newART.appendChild(newP);
//   newLI.appendChild(newART);
//   //newP.appendChild(timeStamp);
//   parent.appendChild (newLI);  