let button = document.querySelector(".btn");
console.log(button);

const dataHolder = {
  id: null,
  advice: null,
};

button.addEventListener("click", (_) => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const dataObject = data.slip;
      const advice = dataObject.advice;
      const id = dataObject.id;
      console.log(dataObject, advice, id);
      dataHolder.advice = advice;
      dataHolder.id = id;
    });
});

// functions to add advice and #id to the dom:

function addText() {
  const adviceNum = document.querySelector(".advice-num");
}

console.log(dataHolder);
