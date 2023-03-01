var x;
var y;
var z;

var rule = Math.floor(Math.random() * 256);
var array = [0,0,0,0,0,0,1,0,0,0,0,0,0];

// adding rule to h2
function heading2() {
    const headingElement = document.getElementById("rule");

    let p = document.createElement("p");
    p.textContent = "Rule " + rule;
    headingElement.appendChild(p);
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

function applyRule(config, rule) {
    let temp = dec2bin(rule);

    // making sure that temp has the right amount of characters
    while (temp.length < 8) {
        temp = '0' + temp;
    }
    // console.log("length: " + temp.length);
    // console.log(temp);

    let array = [];

    for (let curr = 0; curr < config.length; curr++) {
        x = curr-1; //curr-1
        y = curr; //curr
        z = curr+1; //curr+1

        if (x < 0) {
            x = config.length-1;
        } else if (x >= config.length) {
            x = 0;
        }

        if (z < 0) {
            z = config.length-1;
        } else if (z >= config.length) {
            z = 0;
        }

        x = config[x];
        y = config[y];
        z = config[z];

        // console.log(x + " " + y + " " + z); //checking if x y z values are correct
    
        //b7
        if (x == 1 && y == 1 && z == 1) {

            // set rule digit to current array index (if true, set true; vice versa)
            array[curr] = parseInt(temp[0]);
        }

        //b6
        else if (x == 1 && y == 1 && z == 0) {

            // set rule digit to current array index (if true, set true; vice versa)
            array[curr] = parseInt(temp[1]);
        }

        //b5
        else if (x == 1 && y == 0 && z == 1) {

            // set rule digit to current array index (if true, set true; vice versa)
            array[curr] = parseInt(temp[2]);
        }

        //b4
        else if (x == 1 && y == 0 && z == 0) {

            // set rule digit to current array index (if true, set true; vice versa)
            array[curr] = parseInt(temp[3]);
        }

        //b3
        else if (x == 0 && y == 1 && z == 1) {

            // set rule digit to current array index (if true, set true; vice versa)
            array[curr] = parseInt(temp[4]);
        }

        //b2
        else if (x == 0 && y == 1 && z == 0) {

            // set rule digit to current array index (if true, set true; vice versa)
            array[curr] = parseInt(temp[5]);
        }

        //b1
        else if (x == 0 && y == 0 && z == 1) {

            // set rule digit to current array index (if true, set true; vice versa)
            array[curr] = parseInt(temp[6]);
        }

        //b0
        else if (x == 0 && y == 0 && z == 0) {

            // set rule digit to current array index (if true, set true; vice versa)
            array[curr] = parseInt(temp[7]);
        }

        // console.log("test: for " + x + y + z + " array[" + curr + "] is " + array[curr]);
    }

    // console.log(array);
    return array;
}

// test
//applyRule([0,0,1,0,0],147);

//************************************************************** *

function drawGrid(n) {
    let newLine = document.createElement("div");
    newLine.style.height = "50px";

    const gridElement = document.querySelector("#grid");

    // draws n amount of rows
    for (let i = 1; i <= n; i++) {

        // tiles in EACH row
        for (let j = 0; j < array.length; j++) {
        
            let div = document.createElement("div");
            div.className = "tile";

            let tile = array[j];

            // Style of the tiles
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.borderStyle = "solid";
            div.style.borderWidth = "1.5px";
            div.style.borderColor = "black";
            div.style.display = "inline-block";
            
            if (tile == 1) {
                div.style.background = "cornflowerblue";
            } else {
                div.style.background = "white";
            }

            newLine.appendChild(div); 
        }

        // updates the array
        array = applyRule(array, rule);
        gridElement.appendChild(newLine);
        newLine = document.createElement("div");
        newLine.style.height = "50px";

    }
}

module.exports = { applyRule };