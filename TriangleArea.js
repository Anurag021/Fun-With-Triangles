var sides = document.querySelectorAll(".triangle-Side")
var btnCalcArea = document.querySelector("#btn-CalcArea")
var outputArea = document.querySelector("#outputArea")

btnCalcArea.addEventListener("click", CalculateArea)

function CalculateArea(){
    console.log("clicked")
    var semiParametre = Number(sides[0].value) + Number(sides[1].value) +Number(sides[2].value)
    console.log(semiParametre)

    var area =Math.sqrt(semiParametre * (semiParametre-sides[0].value)*(semiParametre-sides[1].value)*(semiParametre-sides[2].value))

    outputArea.innerText = "The Area Of Triangle is: "+area
}