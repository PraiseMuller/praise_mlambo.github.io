
//function to select elements
const selectElement = (Vari) => document.querySelector(Vari);

//Open the menu on click
selectElement('.open') .addEventListener('click', () => {
  //select what i want to toggle
  selectElement('.nav-list').classList.add('active');
});

//Close the menu on click
selectElement('.close') .addEventListener('click', () => {
  //select what i want to toggle
  selectElement('.nav-list').classList.remove('active');
});
