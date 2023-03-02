const ns = "http://www.w3.org/2000/svg";

//e.stopPropagation(); //prevents the current click to be clicked. don't create another vertex

const box = document.querySelector("#dot-box");

var isDrawing = false;
var object;
var objectType = "line";
var objectColor = "black";

class Dot {
    constructor(cx,cy) {
        this.x = cx;
        this.y = cy;
    }


    draw() {
        let dot = document.createElementNS(ns, 'circle');
        dot.setAttributeNS(null,"fill","black");
        dot.setAttributeNS(null,"cx", this.x);
        dot.setAttributeNS(null,"cy", this.y);
        dot.setAttributeNS(null,"r","10");
        dot.classList.add("dot");
        dot.classList.add(objectColor);

        box.appendChild(dot);
        console.log("you drew a dot!");
    
    } 

    update(x,y) {

        this.x = x;
        this.y = y;
            
        this.draw();
    }
}

class Line {
    constructor(x1,y1,x2,y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.line = document.createElementNS(ns, 'line');
    }

    update(x,y) {

        this.x2 = x
        this.y2 = y
            
        this.draw();
    }

    draw() {
        this.line.setAttributeNS(null,"x1", this.x1);
        this.line.setAttributeNS(null,"x2", this.x2);
        this.line.setAttributeNS(null,"y1", this.y1);
        this.line.setAttributeNS(null,"y2", this.y2);
        this.line.classList.add("line");
        this.line.classList.add(objectColor);

        box.appendChild(this.line);
        console.log("you drew a line!");

        
    } 

}

function red() {
    objectColor = "red";
}
function orange() {
    objectColor = "orange";
}
function yellow() {
    objectColor = "yellow";
}
function green() {
    objectColor = "green";
}
function blue() {
    objectColor = "blue";
}
function purple() {
    objectColor = "purple";
}
function black() {
    objectColor = "black";
}
function line(){
    objectType = "line";
}
function dot(){
    objectType = "dot";
}

//start to method
box.addEventListener("mousedown", function(e) {
    isDrawing = true;

    let rect = box.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // let dot = new Dot(x,y);
    // dot.drawDot();

    if (objectType == "line") {
        object = new Line(x,y,x,y);
    } else if (objectType == "dot") {
        object = new Dot(x,y);
    }

    object.draw();
});

box.addEventListener("mousemove", function(e) {
    if (isDrawing == true) {
        let rect = box.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        object.update(x,y);
    }
});

box.addEventListener("mouseup", function() {
    isDrawing = false;
});

