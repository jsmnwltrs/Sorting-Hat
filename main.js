const nameInput = document.getElementById('inputName');
const sortButton = document.getElementById('sortButton');

const printToDom = (string, divId) => {
    document.getElementById(divId).innerHTML += string;
};

const activateExpel = () => {
document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.classList.contains('expelButton')) {
    const buttonIClicked = event.target;
      const cardToExpel = buttonIClicked.parentNode.parentNode;
      cardToExpel.remove();
  }
})
};

const cardBuilder = (name) => {
    let sortingHouse = '';
    let randomizer = Math.floor((Math.random() * 4) + 1);
        if (randomizer === 1) {
            sortingHouse = 'Gryffindor'
        };
        if (randomizer === 2) {
            sortingHouse = 'Slytherin'
        };
        if (randomizer === 3) {
            sortingHouse = 'Huffelpuff'
        };
        if (randomizer === 4) {
            sortingHouse = 'Ravenclaw'
        };
    let domString = `<div class="card w-25 m-2">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-text">${sortingHouse}!</h6>
            <a href="#" class="btn btn-primary expelButton">Expel!</a>
         </div>
     </div>`;
    printToDom(domString, 'studentCards');
    activateExpel();
}

sortButton.addEventListener('click', (e) => {
    e.preventDefault();
    cardBuilder(nameInput.value);
});

