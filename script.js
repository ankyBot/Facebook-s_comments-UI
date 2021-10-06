let myTextInput = document.querySelector("textarea");

let apiImgArea = document.getElementById("for-api-img");

let gifAddButton = document.getElementById("fetch-gif");

let commentButton = document.querySelector("button");

let commentContent = document.getElementById("content");

//action definations

//
let fetchImgUi = () => {
  let searchInptGify = document.createElement("input");

  let searchButton = document.createElement("button");

  let searchBoxGify = document.createElement("div");

  searchButton.classList.add("searchButton");
  searchButton.innerText = "search";

  searchInptGify.classList.add("searchInputGify");

  searchBoxGify.classList.add("searchBoxGify");

  apiImgArea.appendChild(searchInptGify);
  apiImgArea.appendChild(searchButton);

  //calling rest API
  let fetchImg = () => {
    let apiKey = "LHV86MP6aMHyhYiOLEajf0eiQ1EzgZu4";

    let searchInput = searchInptGify.value.trim();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=`;
    url = url.concat(searchInput);

    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        // console.log(content.data);
        let img = document.createElement("img");
        img.src = content.data[0].images.downsized.url;

        // img.style.contenteditable = "true";

        apiImgArea.appendChild(img);

        apiImgArea.removeChild(searchInptGify);
        apiImgArea.removeChild(searchButton);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  searchButton.addEventListener("click", fetchImg);
};

//adding comments
let addComment = () => {
  if (myTextInput.value !== "") {
    let divComments = document.createElement("div");
    let myTextComment = document.createElement("p");

    myTextComment.innerText = myTextInput.value;

    divComments.appendChild(myTextComment);
    divComments.classList.add("formate-comments");
    commentContent.appendChild(divComments);
  }

  let myImgUrl = document.querySelector("img");
  if (myTextInput.value != "" && myImgUrl.src != "") {
    let divComments = document.createElement("div");
    let myTextComment = document.createElement("p");
    let myImgComment = document.createElement("img");

    myTextComment.innerText = myTextInput.value;

    myImgComment.src = myImgUrl.src;

    divComments.appendChild(myTextComment);
    divComments.appendChild(myImgComment);

    commentContent.appendChild(divComments);
  }

  //clearing comment input area
  myTextInput.value = "";

  while (apiImgArea.firstChild) {
    apiImgArea.removeChild(apiImgArea.firstChild);
  }
};

//action buttons
commentButton.addEventListener("click", addComment);

gifAddButton.addEventListener("click", fetchImgUi);
