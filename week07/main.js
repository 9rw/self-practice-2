const data = [];

const cardContainer = document.querySelector(".card_container");

class Card {
  static id = 0;
  constructor(word, trans) {
    this.word = word;
    this.translated = trans;
    this.id = Card.id++;
  }
}

data.push(new Card("integrity", "ความซื่อสัตย์"));
data.push(new Card("paradise", "สวรรค์"));
data.push(new Card("economy", "เศรษฐกิจ"));

const cardElement = document.querySelector(".card");
cardElement.addEventListener("click", () => {
    let getFlip = () => cardElement.getAttribute("fliped");
    cardElement.setAttribute("fliped", getFlip() === "1" ? "0" : "1");
});

const editCard = (n)=>{
  const {word, translated} = data[n]
  const wordElement = document.querySelector(".word")
  wordElement.textContent = word
  const transElement = document.querySelector(".translated")
  transElement.textContent = translated
  const definitionElement = document.querySelector(".link_to");
  const link = `https://www.google.com/search?q=${word} definition`;
  definitionElement.setAttribute("href", link);
  definitionElement.setAttribute("target", "_blank");
  definitionElement.removeAttribute("style")
  if (cardElement.getAttribute("fliped") === "1"){
    cardElement.setAttribute("fliped", "0")
  }
}

if (data.length > 0){
  data.forEach(({id, word}) => {
    const listElement = document.querySelector(".list");
    const createLi = document.createElement("li");
    createLi.textContent = word;
    createLi.setAttribute("num", id);
    listElement.appendChild(createLi);
    createLi.addEventListener("click", ()=> {
      cardElement.setAttribute("n", id)
      editCard(id)
    })
  })
  editCard(0)
}