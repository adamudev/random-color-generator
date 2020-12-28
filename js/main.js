const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector("#btn");
const color = document.querySelector(".color");

button.addEventListener('click', () => {
  let getHexColor = '#';
  for(let i = 0; i < 6; i++){
    getHexColor += hex[getRandomNumber()]
  }

  color.textContent = getHexColor;
  document.body.style.backgroundColor = getHexColor;
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length)
}