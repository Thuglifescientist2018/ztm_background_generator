var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2")
var body = document.querySelector("body");
var direction = document.querySelector("#direction");
var d_nav = document.querySelector("#d_nav");
var generate = document.getElementById("generate");

function setDirection(e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    
    var d_nav_left = d_nav.style.left = x  + "px";
    var d_nav_top = d_nav.style.top =  y  + "px";
    var degree = x + y /2 + "deg";
    
    setGradient(color1.value, color2.value, degree)

    
    
    e.stopPropagation();
    e.preventDefault();

}
function setGradient(color1, color2, direction) {
    body.style.background = 'linear-gradient(' + direction + ', '+ color1 +', '+ color2 +')';
    css.textContent = body.style.background;
}

setGradient(color1.value, color2.value, "360deg");

function gradientGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);
    let color1 = "rgb(" + r + "," + g + "," + b + ")";
    let color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
    
    
    setGradient(color1, color2, "to right")

}
color1.addEventListener('input', function (){
    setGradient(this.value, color2.value, "to right");
});

color2.addEventListener('input', function (){
    setGradient(color1.value,this.value, "to right");
});
generate.addEventListener("click", gradientGenerator)
direction.addEventListener("mousemove", setDirection)