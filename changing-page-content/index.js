//1.get element references
const nameEl = document.getElementById('name');
const inputEl = document.getElementById('inputName');
const btnEl = document.getElementById('changeButton');

// 2.add logic triggered when button is clicked
btnEl.addEventListener('click', () => {
  const inputValue = inputEl.value;

  // 4. prevent user form updating with empty string
  if (!inputValue) {
    alert('Input is empty, please enter your name');
    return;
  }

  nameEl.textContent = inputValue;
  // 3. clearing input
  inputEl.value = '';
});
