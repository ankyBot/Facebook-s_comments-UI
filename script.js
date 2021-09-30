let myButton = document.querySelector("button");
let myVal = document.querySelector("textarea");
let contentArea = document.getElementById("content");

let addComment = () => {
  let myNewVal = document.createElement("p");
  let myImg = document.createElement("img");

  // myNewVal.style.margin = "10px";
  // myNewVal.style.border = "1px solid";
  // myNewVal.style.textAlign = "left";
  myNewVal.classList.add("formate-comments");

  myNewVal.innerText = myVal.value;

  myImg.src = "todo's.svg";

  contentArea.appendChild(myNewVal);
  contentArea.appendChild(myImg);
};

myButton.addEventListener("click", addComment);
