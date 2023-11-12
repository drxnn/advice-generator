let button = document.querySelector(".btn");
console.log(button);

const dataHolder = {
  id: "000",
  advice: "Fetching advice...",
};

let initialLoad = true; // only run the addText() once upon loading app
window.addEventListener("load", () => {
  if (initialLoad) {
    addText();
    fetchFire();
    initialLoad = false;
  }
});

button.addEventListener("click", fetchFire);

async function fetchFire() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    const dataObject = data.slip;
    const advice = dataObject.advice;
    const id = dataObject.id;
    console.log(dataObject, advice, id);
    dataHolder.advice = advice;
    dataHolder.id = id;
    addText();
  } catch (error) {
    console.error(error);
  }
}

// functions to add advice and #id to the dom:

function addText() {
  const adviceNum = document.querySelector(".advice-num");
  const quote = document.getElementById("advice-p");
  quote.innerText = `"${dataHolder.advice}"`;
  adviceNum.innerText = `ADVICE #${dataHolder.id}`;
}

console.log(dataHolder);
