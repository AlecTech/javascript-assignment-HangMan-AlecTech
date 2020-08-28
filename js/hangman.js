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
var form = document.querySelector('.form');
console.log(form);
var buttonClicked = document.querySelector('#pressed');
console.log(buttonClicked);
var counter = document.querySelector('#counter');
console.log(counter);
var char = document.querySelector('#wrongLetters');
console.log(char);

var attempts = 6;
// var char = document.getElementById('char');
// console.log(char);
//var tries = 

// check logic and change so that user doesn loos chanses when guessed
        var answerArray = [];
        var nowSecretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
        console.log(nowSecretWord);
//if statment to append counter in string format (appendChild didn't work)

    if (nowSecretWord.length > 0)
    {   
        console.log(nowSecretWord.length);
        console.log(attempts);
        let tempCounter = document.getElementById('counter');
        tempCounter.innerText = `Attempts Left: ${attempts}`;
    }
 
    
    for (var a = 0; a < nowSecretWord.length; a++) 
    {
    
        const newDash = document.createElement('SPAN'); 
        //create class guess to be appended to SPAN tag when new match is found
        newDash.classList.add("guess");
        newDash.textContent = "_ ";
        underScores.appendChild(newDash);

    }

// ================MAIN GAME LOGIC STARTS HERE=================== //

form.addEventListener('submit', (event) => 
    {   //check every step at the time to make sure that input data is still there
        event.preventDefault();
        console.log(event);

        

        // method FormData found on website 
        let data = new FormData (form);
        let newChar = data.get('char');
        console.log(newChar);

        if(nowSecretWord.includes(newChar))
        //console.log(nowSecretWord.includes(newChar));
        {
            var answerArray = [];
            for (var i=0; i<nowSecretWord.length; i++)
            {
                if(nowSecretWord[i]=== newChar) answerArray.push(i);
                console.log(answerArray);
                
            }

            let underScoreElement = document.getElementsByClassName("guess");
            console.log(underScoreElement);
            //loop through array and replace matching indexes with correct letter
            for (let i = 0; i < answerArray.length; i++) 
            {
              underScoreElement[answerArray[i]].innerText = newChar;
            }

        }
        else 
        {
            alert("Oops strike");
            attempts--;
            console.log(attempts);
            let tempCounter = document.getElementById('counter');
            tempCounter.innerText = `Attempts Left: ${attempts}`;

            let newString = document.getElementById('wrongLetters');
            let li = document.createElement('LI');
            li.innerText = newChar;
            newString.appendChild(li);
            
            
            let img = document.getElementById('imageIndex');
            img.setAttribute('src', "./img/wrong" + attempts + ".png");

            if (attempts<1)
            {      
                alert("You've lost");
                setTimeout(function(){ 
                    
                    location.reload()  ;
                     
                }, 1500);
                
            }

        }


    });
