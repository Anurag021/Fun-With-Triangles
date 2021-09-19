var firstAngle = document.querySelector("#first-Angle")
var secondAngle = document.querySelector("#second-Angle")
var thirdAngle = document.querySelector("#third-Angle")
const angle = document.querySelectorAll(".angle")

var btnIsTriangle = document.querySelector("#btn-IsTriangle")
var output = document.querySelector("#output")

btnIsTriangle.addEventListener("click", clickHandler);

function clickHandler(){
    console.log("clicked");
    console.log(angle)
    sum = sumOfAngles();
    console.log(sum)

    if (sum === 180) {
       output.innerText = "Angles can form Triangle"
    }else{
        output.innerText = "Angles cannot form Triangle"
    }

}
function sumOfAngles(){
    var sum = 0;
    // sum = Number(firstAngle.value) + Number(secondAngle.value) + Number(thirdAngle.value);
    sum = Number(angle[0].value) + Number(angle[1].value)  + Number(angle[2].value) 
    return sum;
}
