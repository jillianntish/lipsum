const loremIpsum = require('./genny');
const querystring = require('querystring');
const fs = require('fs');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  // Capture the contents of index.html in a variable
  const content = fs.readFileSync('./public/index.html', {encoding:'utf8'})
  //then send it to the client on request for homepage
  res.write(content)
  res.end();
})

router.post('/', (request, response) => {
  request.on("data", function(inputValue) {
    // Convert the POST data into a readable string
    let query = inputValue.toString(); // i.e. numberOfParagraphs=3
    // Parse the query into a key/value pair and store the value of numberOfParagraphs
    // in a variable
    let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
    // Generate the lorem ipsum text with the getAllParagraphs function
    let loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
    // Capture the contents of index.html in a variable
    let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
    // Replace the placeholder <div> with the lorem ipsum text
    fileContents = fileContents.replace("<div class='placeholder-div'></div>",loremIpsumText);;
    response.setHeader('Content-Type', 'text/html');
    // Send a response to the client with the modified index.html file
    response.write(fileContents);
    response.end();
  });
});

module.exports = router;