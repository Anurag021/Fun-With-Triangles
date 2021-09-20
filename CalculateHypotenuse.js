var baseSide = document.querySelector("#base-Side")
var heightSide = document.querySelector("#height-Side")
var btnCalHypotenuse = document.querySelector("#btn-CalcHypotenuse")
var result = document.querySelector("#result")

btnCalHypotenuse.addEventListener("click", calculateHypotenuse)

function calculateHypotenuse(){
    console.log("clicked")
    Math.sqrt(Number(baseSide.value));
    Math.pow(Number(heightSide.value), 2);
    var hypotenuse = Math.sqrt(Math.pow(Number(baseSide.value),2) +
    Math.pow(Number(heightSide.value), 2))
    result.innerText = "The Hypotenuse of this Triangle is:"+ hypotenuse

}