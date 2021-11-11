// init variables
const caption = document.querySelector('figcaption');
const openClick = document.querySelector('#openInfo');
const infoOverlay = document.querySelector('.info');
const pointCount = document.querySelector('#count');
const plus = document.querySelector('#plus');
const lose = document.querySelector('#minus');
const plus2 = document.querySelector('#plus2');
const lose2 = document.querySelector('#minus2');
const plus3 = document.querySelector('#plus3');
const lose3 = document.querySelector('#minus3');
const plus4 = document.querySelector('#plus4');
const lose4 = document.querySelector('#minus4');

caption.textContent = 'Click on the painting for more information';
console.log(caption);

openClick.onclick = function () {
  infoOverlay.classList.toggle('change');
};

let points = 0;

plus.onclick = function () {
  points += 1;
  pointCount.textContent = `total points: ${points}, good job`;
};

lose.onclick = function () {
  points -= 1;
  pointCount.textContent = `total points: ${points}, try again`;
};

plus2.onclick = function () {
  points += 1;
  pointCount.textContent = `total points: ${points}, good job`;
};

lose2.onclick = function () {
  points -= 1;
  pointCount.textContent = `total points: ${points}, try again`;
};

plus3.onclick = function () {
  points += 1;
  pointCount.textContent = `total points: ${points}, good job`;
};

lose3.onclick = function () {
  points -= 1;
  pointCount.textContent = `total points: ${points}, try again`;
};

plus4.onclick = function () {
  points += 1;
  pointCount.textContent = `total points: ${points}, good job`;
};

lose4.onclick = function () {
  points -= 1;
  pointCount.textContent = `total points: ${points}, try again`;
};
