
const canvas = new fabric.Canvas('canvas', {
    width: 600,
    height: 500,
    backgroundColor: 'transparent',
    selection: false,
});

const purple = {color: '#a080ff', radius: 25, left: 200, top: 170}
const blue = {color: '#006bb3', radius: 40, left: 115, top: 130}
const salmon = {color: '#ffb3b3', radius: 40, left: 115, top: 220}

const purpleArray = [
    new fabric.Circle({left: purple.left, top: purple.top, fill: purple.color, radius: purple.radius, selectable: false}),
    new fabric.Circle({left: purple.left+2*purple.radius, top: purple.top-purple.radius/2, fill: purple.color, radius: purple.radius, selectable: false}),
    new fabric.Circle({left: purple.left+4*purple.radius, top: purple.top, fill: purple.color, radius: purple.radius, selectable: false}),
    new fabric.Circle({left: purple.left+purple.radius, top: purple.top+1.8*purple.radius, fill: purple.color, radius: purple.radius, selectable: false}),
    new fabric.Circle({left: purple.left+3.1*purple.radius, top: purple.top+1.8*purple.radius, fill: purple.color, radius: purple.radius, selectable: false}),
    ];

const blueArray = [
    new fabric.Circle({left: blue.left, top: blue.top, fill: blue.color, radius: blue.radius, selectable: false}),
    new fabric.Circle({left: blue.left+2*blue.radius, top: blue.top-1.2*blue.radius, fill: blue.color, radius: blue.radius, selectable: false}),
    new fabric.Circle({left: blue.left+4.1*blue.radius, top: blue.top-1.2*blue.radius, fill: blue.color, radius: blue.radius, selectable: false}),
    new fabric.Circle({left: blue.left+6*blue.radius, top: blue.top, fill: blue.color, radius: blue.radius, selectable: false}),
    ];

const salmonArray = [
    new fabric.Circle({left: salmon.left, top: salmon.top, fill: salmon.color, radius: salmon.radius, selectable: false}),
    new fabric.Circle({left: salmon.left+2*salmon.radius, top: salmon.top+1.2*salmon.radius, fill: salmon.color, radius: salmon.radius, selectable: false}),
    new fabric.Circle({left: salmon.left+4.1*salmon.radius, top: salmon.top+1.2*salmon.radius, fill: salmon.color, radius: salmon.radius, selectable: false}),
    new fabric.Circle({left: salmon.left+6*salmon.radius, top: salmon.top, fill: salmon.color, radius: salmon.radius, selectable: false}),
    ];

const addCirclesToCanvas = (array)=> {
    return array.map((item)=> {
        canvas.add(item)
    })
}

addCirclesToCanvas(purpleArray);
addCirclesToCanvas(blueArray);
addCirclesToCanvas(salmonArray);

canvas.renderAll();

const purpleModal = document.getElementById("purpleModal");
const blueModal = document.getElementById("blueModal");
const redModal = document.getElementById("redModal");

const purpleBtnCloseEl = document.getElementById("purpleBtnClose");
const blueBtnCloseEl = document.getElementById("blueBtnClose");
const redBtnCloseEl = document.getElementById("redBtnClose");

const purpleSpan = document.getElementById("purpleClose");
const blueSpan = document.getElementById("blueClose");
const redSpan = document.getElementById("redClose");


const openModal = (array, modal) => {
    array.forEach((item)=> {
        item.on('mousedown', () => {
            modal.style.display = 'block';
        })
    })
};

openModal(purpleArray, purpleModal);
openModal(blueArray, blueModal);
openModal(salmonArray, redModal);

const closingModal = (element, modal) => {
    element.onclick = () => {
        modal.style.display = 'none'
    }
};

closingModal(purpleSpan, purpleModal);
closingModal(purpleBtnCloseEl, purpleModal);
closingModal(blueSpan, blueModal);
closingModal(blueBtnCloseEl, blueModal);
closingModal(redSpan, redModal);
closingModal(redBtnCloseEl, redModal);

window.onclick = (event) => {
    if (event.target === purpleModal) {
        purpleModal.style.display = "none";
    } else if (event.target === blueModal) {
        blueModal.style.display = "none";
    } else if (event.target === redModal) {
        redModal.style.display = 'none;'
    }
}

// cloneAsImage(callback, optionsopt) → {fabric.Object}
