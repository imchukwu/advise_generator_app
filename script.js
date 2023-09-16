// const imgDataBtn = document.querySelector(".bottom-svg");
const btnTest = document.querySelector(".btnTest");
const idElement = document.querySelector(".slip_id");
const output = document.querySelector(".centered-p");
const svgElement = document.querySelector(".bottom-svg");
const alternateImage = document.querySelector(".alternate-svg");

// // Add a click event listener to the SVG element
// svgElement.addEventListener("click", () => {
//     // Your code to handle the click event goes here
//     alert("SVG clicked!"); // Example: Show an alert
// });

svgElement.addEventListener("click", () => {
  const apiUrl = "https://api.adviceslip.com/advice";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      idElement.textContent = JSON.stringify(data.slip.id);
      output.textContent = JSON.stringify(data.slip.advice);
    })
    .catch((error) => {
      output.textContent = `Error: ${error.message}`;
    });
});


// Add a mouseover event listener to swap the images
svgElement.addEventListener("mouseover", () => {
    alternateImage.classList.remove('hidden');
    svgElement.classList.add('hidden');
});

// Add a mouseout event listener to revert to the default image
alternateImage.addEventListener("mouseout", () => {
    svgElement.classList.remove('hidden');
    alternateImage.classList.add('hidden');
});
