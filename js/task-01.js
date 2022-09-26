const allCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allCategories.length}`);
console.log('');

// const allElements = document.querySelectorAll('h2');
// console.log(allElements);

for (const category of allCategories) {
    const allElements = category.querySelector('h2');   
    const elemenst = category.querySelectorAll('li');

    console.log(`Category: ${allElements.textContent}`);
    console.log(`Elements: ${elemenst.length}`);
    console.log('');
}