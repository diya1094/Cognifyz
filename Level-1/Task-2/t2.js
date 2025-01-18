function displayGreetings(){
    const dt = new Date();
    const hour = dt.getHours();
    let greet;
    if(hour<12){
        greet = "Good Morning";
    }
    else if(hour<18){
        greet = "Good Afternoon";
    }
    else{
        greet = "Good Night";
    }
    alert(greet);
}

window.onload = displayGreetings;

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    let expression = document.getElementById("result").value;
    let result = eval(expression);
    document.getElementById("result").value = result;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+') {
        display(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        let currentValue = document.getElementById("result").value;
        document.getElementById("result").value = currentValue.slice(0, -1);
    } else if (key === 'c' || key === 'C') {
        clearScreen();
    }
});

let change = document.getElementById("btn");
change.addEventListener("click", function(){
     if (change.style.backgroundColor === "rgb(176, 182, 243)" || change.style.backgroundColor === "#B0B6F3") {
        change.style.backgroundColor = "";
    } else {
        change.style.backgroundColor = "#B0B6F3";
    }
});