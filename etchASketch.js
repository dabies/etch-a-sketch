let gridNum = 16;
const container = document.querySelector('.container');
let divEdge = 960/gridNum;

for (i = 0; i < (gridNum ** 2); i++) {
    let newDiv = document.createElement('div');
    newDiv.style.width = `${divEdge}px`;
    newDiv.style.height = `${divEdge}px`;
    container.appendChild(newDiv);
}

function changeColor(event) {
    event.target.style.backgroundColor = 'gray';
}

container.addEventListener('mouseover', changeColor, false);