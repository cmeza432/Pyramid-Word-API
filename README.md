# Pyramid Word

Project that uses POST API call using Node.js.

## Summary

The programm contains a simple API created in Node.js. This API checks if input given is a Pyramid Word. App will start up on the 3000 port.

## Pyramid Word

A Pyramid Word is a word that you can arrange the letters in increasing frequency, starting with 1 and continuing without gaps and without duplicates.

Examples:

- banana is a pyramid word because you have 1 'b', 2 'n's, and 3 'a's
- bandana is not a pyramid word because you have 1 'b' and 1 'd'

## How to run

The program is simple to run. First you start the server by running the command prompt below:

`node .\server.js`

You have a few options on how to use the API once the server is running. Use a API Platform like Postman, or the HTML file I created.

## Using Postman

To use Postman with the API simply go into Postman, create a new POST request with the url
`http://localhost:3000/word` then navigate to the body tab right below the url search bar. Select Raw in the first tab, then JSON in the second. The request body you will be sending should look like below:

         {
            "word": "[word to be checked]"
         }

Then click the Send tab next to the url bar and you should receive a result body which will display on the bottom of the page.

## Using HTML page

To use the given HTML page, make sure the server is running with the above command and then open up the index.html file in the folder.
Once opened up, just type the word wanting to be checked and it will display the result. If another word is needing to be checked simply click the back arrow
for the browser. Enjoy!
