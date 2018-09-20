const PrintToDom = (domString, divId) => {
    let domElement = document.getElementById(divId);
    domElement.innerHTML = domString;
};

