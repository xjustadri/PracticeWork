const form = document.querySelector("#search-form");
const input = document.querySelector("#search-term");
const gifContainer = document.querySelector("#gif-container");
const removeBtn = document.querySelector("#remove-btn");

const giphyApiKey = "ENSmJIYoO7szKOy5b5QVr1ErQI9OCMS9";

// Part 1: Handle form submission
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let searchTerm = input.value;
  if (!searchTerm) return;

  try {
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: giphyApiKey,
        limit: 50
      }
    });

    console.log("Giphy response:", res.data);

    appendGif(res.data);

  } catch (err) {
    console.error("Error fetching GIF:", err);
  }

  input.value = "";
});

// Part 2: Append a random GIF
function appendGif(data) {
  if (data.data.length === 0) return;

  const randomIndex = Math.floor(Math.random() * data.data.length);
  const gifUrl = data.data[randomIndex].images.original.url;

  const img = document.createElement("img");
  img.src = gifUrl;
  img.classList.add("gif");

  gifContainer.appendChild(img);

  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Part 3: Remove all GIFs
removeBtn.addEventListener("click", function () {
  gifContainer.innerHTML = "";
});
