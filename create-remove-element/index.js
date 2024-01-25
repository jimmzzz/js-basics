const createBtnEl = document.getElementById('createElement');
const deleteBtnEl = document.getElementById('deleteElement');

function createElementWithText(tagName, textContent, className) {
  const newElement = document.createElement(tagName);
  newElement.textContent = textContent;
  newElement.setAttribute('class', className);

  return newElement;
}

function removeElement(tagName) {
  const elementToRemove = document.querySelector(tagName);

  if (!elementToRemove) {
    console.warn(`No element ${tagName} found`);
    return;
  }

  elementToRemove.remove(elementToRemove);
}

createBtnEl.addEventListener('click', () => {
  const newTitle = createElementWithText('h1', 'new Title', 'title');
  const newSubtitle = createElementWithText(
    'h2',
    'This is a subtitle',
    'subtitle'
  );

  document.body.append(newTitle, newSubtitle);
});

deleteBtnEl.addEventListener('click', () => {
  removeElement('h1');
  removeElement('h2');
});
