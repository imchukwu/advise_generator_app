const adviceNumberElement = document.querySelector(".advice-id");
const adviceMessageElement = document.querySelector(".advice-message");
const adviceDiceBtnElement = document.querySelector(".advice-dice");

adviceDiceBtnElement.addEventListener("click", () => {
  const apiUrl = "https://api.adviceslip.com/advice";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      adviceNumberElement.textContent = JSON.stringify(data.slip.id);
      adviceMessageElement.textContent = JSON.stringify(data.slip.advice);
    })
    .catch((error) => {
        adviceMessageElement.textContent = `Error: ${error.message}`;
    });
});
