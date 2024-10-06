const textInput = document.querySelector('input#name-input');
const spanOutput = document.querySelector('span#name-output');
textInput.addEventListener('input', event => {
  event.currentTarget.value = event.currentTarget.value.trim();
  spanOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '' || event.currentTarget.value === ' ') {
    spanOutput.textContent = `Anonymous`;
  }
});
