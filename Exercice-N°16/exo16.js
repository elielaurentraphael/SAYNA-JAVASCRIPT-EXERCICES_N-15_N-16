// 1-
const result = document.querySelector("#result");
const first = result.firstElementChild;

// 2-
const next = result.firstElementChild.nextElementSibling;
next.style.color = "red";

// 3-
const last = result.lastElementChild;
const third = result.lastElementChild.previousElementSibling;
console.log(third);
console.log(third.textContent);
