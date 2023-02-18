var red = 255;
var green = 255;
var blue = 50;

var id = 1;

function drawGrid(n) {

    const helloElement = document.querySelector("#box2");

    for (let i = 1; i <= n; i++) {
	let div = document.createElement("div");
    
    div.className = "tile";
    div.id = id;

    // Click event
    div.addEventListener('click', (e) =>

  {
    e.target.style.backgroundColor = "rgb(102, 35, 30)";

    // Retrieve id from clicked element
    let elementId = e.target.id;

    // If element has id
    if (elementId !== '') {
        console.log(elementId);
    }
})

    // Style of the tiles
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.background = drawColor(id);

	helloElement.appendChild(div);

    // ID naming convention
    id = id + 1;

    
    }
}

function drawColor(n) {

    if (n % 10 == 1) {
        green = green - 20;

    }

    if (n < 50) {
        blue = blue + 5;
    } else {
        red = red + 20;
        blue = blue - 5;
    }

    // if (green > 252) {
    //     if (blue > 252) {
    //         red = red + 20;
    //     }

    //     else { blue = blue + 10; }
    // } else { green = green + 10; }

    test = 'rgb('+(red).toString() + ',' + (green).toString() + ',' + (blue).toString() + ')';
    return test;
}