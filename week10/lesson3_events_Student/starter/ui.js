import { addQuote, getAllQuotes, updateQuote, deleteQuote } from "./quote.js";
// Lesson 3 - Events Starter

let quotes = [];

// Select DOM elements
const quoteList = document.querySelector("#quote-list");
const form = document.querySelector("#quoteForm");
const contentInput = document.querySelector("#content");
const authorInput = document.querySelector("#author");
const idInput = document.querySelector("#quoteId");
const randomBtn = document.querySelector("#randomBtn");
const randomDisplay = document.querySelector("#randomQuoteDisplay");

function createQuoteElement(quote) {
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>
  const { id, author, content } = quote;
  const divElement = document.createElement("div");
  const quoteElement = document.createElement("p");
  const authorElement = document.createElement("p");
  const editElement = document.createElement("button");
  const deleteElement = document.createElement("button");

  divElement.dataset.id = id;
  quoteElement.textContent = content;
  divElement.append(quoteElement);

  authorElement.textContent = author;
  divElement.append(authorElement);

  editElement.className = "edit-btn";
  editElement.dataset.id = id;
  editElement.textContent = "Edit";
  divElement.append(editElement);

  deleteElement.className = "delete-btn";
  deleteElement.dataset.id = id;
  deleteElement.textContent = "Delete";
  divElement.append(deleteElement);

  editElement.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);

    const quote = getAllQuotes().find((q) => q.id === id);
    if (quote) {
      idInput.value = quote.id;
      contentInput.value = quote.content;
      authorInput.value = quote.author;
    }
  });

  deleteElement.addEventListener("click", (e) => {
    deleteQuote(id);
    deleteQuoteFromDOM(id);
  });

  return divElement;
}

// Add, edit, delete quote functions
function addQuoteToDOM(quote) {
  const el = createQuoteElement(quote);
  quoteList.appendChild(el);
}

function updateQuoteInDOM(quote) {
  const el = quoteList.querySelector(`[data-id="${quote.id}"]`);
  if (!el) return;
  const [contentP, authorP] = el.querySelectorAll("p");
  if (contentP) contentP.textContent = quote.content;
  if (authorP) authorP.textContent = quote.author;
}

function deleteQuoteFromDOM(id) {
  const el = quoteList.querySelector(`[data-id="${id}"]`);
  if (el) el.remove();
}

function renderQuotes() {
  quoteList.innerHTML = "";
  const all = getAllQuotes();
  all.forEach((q) => addQuoteToDOM(q));
}

function showRandomQuote() {
  const all = getAllQuotes();
  if (!all || all.length === 0) {
    randomDisplay.textContent = "-- No quotes to show --";
    return;
  }
  const idx = Math.floor(Math.random() * all.length);
  const q = all[idx];
  randomDisplay.textContent = `"${q.content}" — ${q.author}`;
}

// Event listeners for form submission, edit, and delete clicks
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const idVal = idInput.value;
  if (!content || !author) return;

  if (idVal) {
    const id = Number(idVal);
    const updated = updateQuote(id, content, author);
    if (updated) updateQuoteInDOM(updated);
  } else {
    const newQuote = addQuote(content, author);
    if (newQuote) addQuoteToDOM(newQuote);
  }

  idInput.value = "";
  contentInput.value = "";
  authorInput.value = "";
});

randomBtn.addEventListener("click", showRandomQuote);

renderQuotes();
