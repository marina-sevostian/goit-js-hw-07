function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const inputControls = document.querySelector('#controls>input');

function createBoxes(amount) {
  if (amount <= 100 && amount >= 1) {
    let inputArray = [];
    for (let index = 0; index < amount; index++) {
      const lastItem = document.createElement('div');
      lastItem.style.width = `${30 + 10 * index}px`;
      lastItem.style.height = `${30 + 10 * index}px`;
      lastItem.style.backgroundColor = getRandomHexColor();
      inputArray.push(lastItem);
    }
    return inputArray;
  }
}

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
};

buttonCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputControls.value);
  divBoxes.innerHTML = '';
  divBoxes.append(...boxesToAdd);
  inputControls.value = '';
});
buttonDestroy.addEventListener('click', destroyBoxes);
