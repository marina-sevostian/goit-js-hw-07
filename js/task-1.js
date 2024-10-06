const liItem = categories.querySelectorAll('.item');
const quantityLiItem = liItem.length;
console.log('Number of categories:', quantityLiItem);
liItem.forEach(element => {
  const titleText = element.querySelector('h2');
  console.log(`Category:`, titleText.textContent);
  const quantityLi = element.querySelectorAll('li');
  console.log(`Elements`, quantityLi.length);
});
