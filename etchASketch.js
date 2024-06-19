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
    event.target.style.opacity -= '-0.2';
}

container.addEventListener('mouseover', changeColor, false);

function removeAllChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function isAcceptable(input) {

    if(Number.isInteger(input) && 0 < input && input <= 100) {
        return true;
    } else {
        return false;
    }
}

const btn = document.getElementById('gridInput');
btn.addEventListener('click', () => {
    let newGrid = Number(prompt('How many squares per side (1-100)?'));
    if(isAcceptable(newGrid)) {
        removeAllChildren(container);
        let divEdge = 960/newGrid;
        for (i = 0; i < (newGrid ** 2); i++) {
            let newDiv = document.createElement('div');
            newDiv.style.width = `${divEdge}px`;
            newDiv.style.height = `${divEdge}px`;
            container.appendChild(newDiv);
        }
    }
});

