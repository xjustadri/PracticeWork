document.addEventListener("DOMContentLoaded", function () {
  // Step 2: Get elements
  const boxContainer = document.querySelector("#box-container");
  const newBoxButton = document.querySelector("#new-box-button");
  const colorForm = document.querySelector("#color-form");
  const colorInput = document.querySelector("#color-input");

  // Step 3: Variables
  let boxColor = "black"; // default
  let boxCounter = 1;

  // Step 4: Handle color form submission
  colorForm.addEventListener("submit", function (e) {
    e.preventDefault();

    boxColor = colorInput.value;

    // Update all existing boxes
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(box => {
      box.style.backgroundColor = boxColor;
    });

    colorInput.value = "";
  });

  // Step 5: Function to add a new box
  function addBox() {
    const newBox = document.createElement("div");
    newBox.classList.add("box");

    newBox.textContent = boxCounter;
    newBox.style.backgroundColor = boxColor;

    // Store ID in data attribute
    newBox.dataset.id = boxCounter;

    boxContainer.appendChild(newBox);

    boxCounter++;
  }

  // Step 6: Button click → add box
  newBoxButton.addEventListener("click", addBox);

  // Step 7: Double‑click to remove box
  document.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.remove();
    }
  });

  // Step 8: Mouse over → show coordinates
  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      const x = e.pageX;
      const y = e.pageY;
      e.target.textContent = `(${x}, ${y})`;
    }
  });

  // Step 9: Mouse out → show ID again
  document.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.textContent = e.target.dataset.id;
    }
  });

  // Step 10: Press N → add box (ignore when typing in color input)
  document.addEventListener("keydown", function (e) {
    if (e.target === colorInput) return;

    if (e.key === "n" || e.key === "N") {
      addBox();
    }
  });
});
