function printex() {
    alert("welcome to external")
}

function out1() {
    console.log("hi i am narayana rapeti")
}

function out2() {
    alert("hello there enter in to narayana world")
}

function out3() {
    var element = document.getElementById("one")
    element.innerHTML += " narayana rapeti"
}

function out4() {
    document.write("welcome to the world")
}

//input types
//console

function out5() {
    var response = window.prompt("please provide your name")
    var element = document.getElementById("one")
    element.innerHTML += response
}

//confirm && dom

function out6() {
    var response = window.confirm("are you sure,want continue")
    if (response) {
        element = document.getElementById("two")
        element.setAttribute("style", "display:none")
    }
    else {
        alert("no problem,please continue")
    }
}