// Task 1: innerText
document.querySelector('#task1').innerText =
  "Content successfully updated!";

// Task 2: innerHTML
document.querySelector('#task2').innerHTML =
  "<button>Submit</button>";

// Task 3: Change background color
document.body.style.backgroundColor = "#232323";

// Task 4: Add border to all .item elements
document.querySelectorAll('.item').forEach(el => {
  el.style.border = "2px solid white";
});

// Task 5: Change link href
document.querySelector('#task5').href =
  "https://www.springboard.com/";

// Task 6: Change input value to 'DOM Master'
document.querySelector('#task6').value = "DOM Master";

// Task 7: Add class using classList
document.querySelector('#task7').classList.add("new-class");

// Task 8: Append a new button
const newBtn = document.createElement("button");
newBtn.innerText = "New Button";
document.querySelector('#task8').appendChild(newBtn);

// Task 9: Remove the element
document.querySelector('#task9').remove();

