var formQuiz = document.querySelector(".form-Quiz")
var btnSubmit = document.querySelector("#btn-Submit")
var output = document.querySelector("#output")

const answers = ["90°","right angle","Equilateral"];
console
btnSubmit.addEventListener("click", calculateScore)

function calculateScore(){
    console.log("clicked")
    
    var formResult = new FormData(formQuiz)
        var score = 0
        var index = 0
    for ( var data of formResult.values() ){
        if(data === answers[index]){
            score = score+ 1;
        }
        index = index +1;
    }
    output.innerText = "Your Quiz Score is: "+ score;
}