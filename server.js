// Function will count the amount of letter present from string given and temp char given
function countLetter(temp, userInput){
    // Variabel to hold counter variable to return total times letter appears
    let counter = 0;

    // Loop for amount of string length, increment counter when same character found
    for(let i = 0; i < userInput.length; i++){
        if(temp == userInput.charAt(i)){
            counter++;
        }
    }

    return counter;
}

// Function will check the word given by user and output if it is a pyramid word
function checkWord(userInput){
    // Clean up userInput by removing special characters and converting
    // To lower case
    userInput = userInput.toLowerCase();
    userInput = userInput.replace(/[^a-zA-Z]/g, '');
    
    // Convert string into a Set[], this way it only keeps unique letters
    let unique = String.prototype.concat(...new Set(userInput));
    
    // Create array to hold values of instances of each letter
    let letterCount = [];

    for(let i = 0; i < unique.length; i++){
        let temp = unique.charAt(i);

        // Add amount of instances of each character in string
        letterCount.push(countLetter(temp, userInput));
    }

    // Sort the array of all counts
    letterCount.sort(function(a,b) {return a - b});
    
    // Check to make sure it is a pyramid word by looping starting from 1, and checking the value 
    // in the array which should match with the index of the loop. If not matched then it is not a pyramid word
    for(let k = 0; k < letterCount.length; k++){
        if(letterCount[k] != (k + 1)){
            return 'Not a Pyramid Word';
        }
    }
    return 'It is a Pyramid Word';
}

// Server Import Properties
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// App configuration and port number
const app = express();
const port = 3000;

// Configuring body parser middleware and use all app imports
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/word', (req, res) => {
    // Extract value from req body
    var input = req.body.word;

    // Check for empty word given
    if(input.length == 0){
        res.send('No String given!');
    } else {
        // Call function to check if user input word is Pyramid Word or not, then send result
        result = checkWord(input);

        // Return the result in the form of a modal
        res.send(result);
    }
});

app.listen(port, () => console.log(`Fetch Reward app listening on port ${port}!`))