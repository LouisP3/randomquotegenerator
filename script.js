
let btn = document.getElementById("btn");
let output = document.getElementById("quote_text");
let author = document.getElementById("quote_author");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) =>{
        output.innerText = item.content;
        author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);