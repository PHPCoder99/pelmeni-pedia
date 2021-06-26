// Themes

const body = document.querySelector("body");

const oddBlocks = document.querySelectorAll("div[class^='block']:nth-child(odd), div[class*=' block']:nth-child(odd)");
const navbar = document.querySelector(".navbar");
const btn = document.querySelector(".change-theme");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle('dark');
  navbar.classList.toggle('dark');
  oddBlocks.forEach((block, i) => {
    block.classList.toggle('dark');
  });
})
