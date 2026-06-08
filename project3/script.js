const form = document.querySelector("#meme-form");
const memeContainer = document.querySelector("#meme-container");

const templates = [
  "https://i.imgflip.com/1bij.jpg",      // One Does Not Simply
  "https://i.imgflip.com/26am.jpg",      // Grumpy Cat
  "https://i.imgflip.com/1otk96.jpg",    // Distracted Boyfriend
  "https://i.imgflip.com/2wifvo.jpg",    // Woman Yelling at Cat
  "https://i.imgflip.com/30b1gx.jpg"     // Drake Hotline Bling
];

const randomBtn = document.querySelector("#random-template");
const imageInput = document.querySelector("#image-url");

randomBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * templates.length);
  imageInput.value = templates[randomIndex];
});


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const topText = document.querySelector("#top-text").value;
  const bottomText = document.querySelector("#bottom-text").value;
  const imageUrl = document.querySelector("#image-url").value;

  // Create meme wrapper
  const memeDiv = document.createElement("div");
  memeDiv.classList.add("meme");

  // Create image
  const img = document.createElement("img");
  img.src = imageUrl;

  // Create top text
  const top = document.createElement("div");
  top.classList.add("meme-text", "top");
  top.innerText = topText;

  // Create bottom text
  const bottom = document.createElement("div");
  bottom.classList.add("meme-text", "bottom");
  bottom.innerText = bottomText;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    memeDiv.remove();
  });

  // Append everything
  memeDiv.appendChild(img);
  memeDiv.appendChild(top);
  memeDiv.appendChild(bottom);
  memeDiv.appendChild(deleteBtn);

  memeContainer.appendChild(memeDiv);

  // Clear form
  form.reset();
});
