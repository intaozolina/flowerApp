
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

const purpleBtnSave = document.getElementById('purpleBtnSave');
const blueBtnSave = document.getElementById('blueBtnSave');
const redBtnSave = document.getElementById('redBtnSave');

const inputEl = document.getElementsByName('flower');

const addPurpleFlower = (imgSrc) => {
    new fabric.Image.fromURL(imgSrc, function(img) {
        img.scale(0.15).set('flipX', true).set("angle", -35).set("hasControls", false).set("top", 170).set("left", 150).set("selectable", false); canvas.add(img);});
    new fabric.Image.fromURL(imgSrc, function(img1) {
        img1.scale(0.15).set('flipX', true).set("angle", 0).set("hasControls", false).set("top", 120).set("left", 220).set("selectable", false); canvas.add(img1);});
    new fabric.Image.fromURL(imgSrc, function(img2) {
        img2.scale(0.15).set('flipX', true).set("angle",15).set("hasControls", false).set("top", 130).set("left", 290).set("selectable", false); canvas.add(img2);});
    new fabric.Image.fromURL(imgSrc, function(img3) {
        img3.scale(0.15).set('flipX', true).set("angle", -20).set("hasControls", false).set("top",200).set("left", 180).set("selectable", false); canvas.add(img3);});
    new fabric.Image.fromURL(imgSrc, function(img4) {
        img4.scale(0.15).set('flipX', true).set("angle", 5).set("hasControls", false).set("top", 180).set("left", 265).set("selectable", false); canvas.add(img4);});
};

const addBlueFlower = (imgSrc) => {
    new fabric.Image.fromURL(imgSrc, function (img) {
        img.scale(0.2).set('flipX', true).set("angle", -45).set("hasControls", false).set("top", 180).set("left", 50).set("selectable", false); canvas.add(img);});
    new fabric.Image.fromURL(imgSrc, function (img1) {
        img1.scale(0.2).set('flipX', true).set("angle", -15).set("hasControls", false).set("top", 80).set("left", 130).set("selectable", false); canvas.add(img1);});
    new fabric.Image.fromURL(imgSrc, function (img2) {
        img2.scale(0.2).set('flipX', true).set("angle", 15).set("hasControls", false).set("top", 40).set("left", 250).set("selectable", false); canvas.add(img2);});
    new fabric.Image.fromURL(imgSrc, function (img3) {
        img3.scale(0.2).set('flipX', true).set("angle", 45).set("hasControls", false).set("top", 60).set("left", 380).set("selectable", false); canvas.add(img3);});
};

const addSalmonFlowers = (imageSrc) => {
    new fabric.Image.fromURL(imageSrc, function (img) {
        img.scale(0.25).set('flipX', true).set("angle", -35).set("hasControls", false).set("top", 270).set("left", 80).set("selectable", false); canvas.add(img);});
    new fabric.Image.fromURL(imageSrc, function (img3) {
        img3.scale(0.25).set('flipX', true).set("angle", 35).set("hasControls", false).set("top", 180).set("left", 370).set("selectable", false); canvas.add(img3);});
    new fabric.Image.fromURL(imageSrc, function (img2) {
        img2.scale(0.25).set('flipX', true).set("angle", 15).set("hasControls", false).set("top", 240).set("left", 270).set("selectable", false); canvas.add(img2);});
    new fabric.Image.fromURL(imageSrc, function (img1) {
        img1.scale(0.25).set('flipX', true).set("angle", -15).set("hasControls", false).set("top", 270).set("left", 150).set("selectable", false); canvas.add(img1);});
}



const iris = "images/iris-back.png";
const allium = "images/allium.png";
const lilac = "images/lilac-back.png";
const hydrangea = 'images/hydrogea-front.png';
const lotus = 'images/lotus.png';
const cornflower = 'images/cornflower.png';
const rose = 'images/pink-rose-back.png';
const gerbera = 'images/gerbera-front.png';
const peony = 'images/peach-peony.png';

let selectedFlower = '';

inputEl.forEach((item) => {
    item.onchange = () => {
        selectedFlower = item.value;
    };
});

purpleBtnSave.onclick = () => {
    purpleArray.forEach((element) => {
        element.set("visible", false)
    });
        if( selectedFlower === "iris") {
            addPurpleFlower(iris);
        } else if (selectedFlower === 'allium') {
            addPurpleFlower(allium);
        } else if (selectedFlower === 'lilac') {
            addPurpleFlower(lilac);
        }
        purpleModal.style.display = 'none';
        canvas.renderAll();
}

blueBtnSave.onclick = () => {
    blueArray.forEach((element) => {
        element.set("visible", false)
    });
    if( selectedFlower === "lotus") {
        addBlueFlower(lotus);
    } else if (selectedFlower === 'cornflower') {
        addBlueFlower(cornflower);
    } else if (selectedFlower === 'hydrangea') {
        addBlueFlower(hydrangea);
    }
    blueModal.style.display = 'none';
    canvas.renderAll();
}

redBtnSave.onclick = () => {
    salmonArray.forEach((element) => {
        element.set("visible", false)
    });
    if( selectedFlower === "rose") {
        addSalmonFlowers(rose);
    } else if (selectedFlower === 'peony') {
        addSalmonFlowers(peony);
    } else if (selectedFlower === 'gerbera') {
        addSalmonFlowers(gerbera);
    }
    redModal.style.display = 'none';
    canvas.renderAll();
}

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

const closingModal = (elementArray, modal) => {
    elementArray.map((element) => {
        element.onclick = () => {
            modal.style.display = 'none'
    }
    })
};

closingModal([purpleSpan, purpleBtnCloseEl], purpleModal);
closingModal([blueSpan, blueBtnCloseEl], blueModal);
closingModal([redSpan, redBtnCloseEl], redModal);


window.onclick = (event) => {
    if (event.target === purpleModal) {
        purpleModal.style.display = "none";
    } else if (event.target === blueModal) {
        blueModal.style.display = "none";
    } else if (event.target === redModal) {
        redModal.style.display = 'none;'
    }
};

window.onresize = () => {
    const optimal_dimensions = [600,500];
    const scaleFactorX=window.innerWidth/optimal_dimensions[0];
    const scaleFactorY=window.innerHeight/optimal_dimensions[1];
    if(scaleFactorX <  scaleFactorY && scaleFactorX < 1) {
        canvas.setWidth(optimal_dimensions[0] *scaleFactorX);
        canvas.setHeight(optimal_dimensions[1] *scaleFactorX);
        canvas.setZoom(scaleFactorX);
    } else if(scaleFactorX >  scaleFactorY && scaleFactorY < 1){
        canvas.setWidth(optimal_dimensions[0] *scaleFactorY);
        canvas.setHeight(optimal_dimensions[1] *scaleFactorY);
        canvas.setZoom(scaleFactorY);
    }else {
        canvas.setWidth(optimal_dimensions[0] );
        canvas.setHeight(optimal_dimensions[1] );
        canvas.setZoom(1);
    }

    canvas.calcOffset();
    canvas.renderAll();
}
