import { addQuote, getAllQuotes } from "./quote.js"
// Step 1: Create an array to hold quote objects
let quotes = []

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.querySelector("#quote-list");

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
  Array.from(quoteList.children).forEach((e)=> quoteList.removeChild(e))
  
  getAllQuotes().map(({id, author, content})=> {
    const pElement = document.createElement("p")

    pElement.textContent = `author: ${content} by ${author}`
    quoteList.appendChild(pElement)
  })
  // console.log(c)
  // console.log(quoteList.children)
};

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
// addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
// renderQuotes();

addQuote('Stay hungry, stay foolish.', 'Steve Jobs');
renderQuotes();