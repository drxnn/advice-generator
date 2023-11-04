let button = document.querySelector(".btn");
console.log(button);

const dataHolder = {
  id: null,
  advice: null,
};

fetchFire();

button.addEventListener("click", fetchFire);

function fetchFire() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const dataObject = data.slip;
      const advice = dataObject.advice;
      const id = dataObject.id;
      console.log(dataObject, advice, id);
      dataHolder.advice = advice;
      dataHolder.id = id;
      addText();
    });
}

// functions to add advice and #id to the dom:

function addText() {
  const adviceNum = document.querySelector(".advice-num");
  const quote = document.getElementById("advice-p");
  quote.innerText = `"${dataHolder.advice}"`;
  adviceNum.innerText = `ADVICE #${dataHolder.id}`;
}

console.log(dataHolder);
