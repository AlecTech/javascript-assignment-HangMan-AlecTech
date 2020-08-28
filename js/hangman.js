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
    var b = nowSecretWord.length;
    attempts = b + 6;
    console.log(attempts);
    let tempCounter = document.getElementById('counter');
    tempCounter.innerText = `Attempts Left: ${attempts}`;
}

        
        //answerArray for already tried letters
       // var remainingLetters = nowSecretWord.length;
        
    
    for (var a = 0; a < nowSecretWord.length; a++) 
    {
    
        const newDash = document.createElement('SPAN'); 
        //create class guess to be appended to SPAN tag when new match is found
        newDash.classList.add("guess");
        newDash.textContent = "_ ";
        underScores.appendChild(newDash);

    }
        
//do

//{
    //var gameOver = true;

    function SetUp()
    {
        


    }

    //while(gameOver = false);

//}





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
            alert("Oops strike 1");
            attempts--;
            console.log(attempts);
            let tempCounter = document.getElementById('counter');
            tempCounter.innerText = `Attempts Left: ${attempts}`;
        }


    });

        //const input = newChar.get('')
        // let a = newChar.get('');
        // console.log(a);
                                                
    /*     if ( a.length >  0)           
        {      
            // print out values that are entered by the user at the bottom of the page
            let data = new Article (a,b);
            data.output();
            const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' })      
            console.log(time);                  
        }
        else
        {
            alert("Warrning this is am empty input!");
        }     */
    













// var turnCount = 11;
// var counterOfConfirmActions = 0;

// var alreadyUsedLetters = [];
// //var word = pickWord(secretWords);
// var remainingLetters = word.length;
// var answerArray = setupAnswerArray(word);





//   newP.textContent = this.content;
//  // const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
//  // timeStamp = document.createElement('TIME'); 
//   newART.appendChild(newH2);
//   newART.appendChild(newP);
//   newLI.appendChild(newART);
//   //newP.appendChild(timeStamp);
//   parent.appendChild (newLI);  