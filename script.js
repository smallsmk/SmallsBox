var options = [
    "hey this worked",
    "oh cool it worked again",
    "neat",
    "why is this kinda slow",
    "ok but also like why arent you centered properly, reee",
    "ree"
];

//clicking on "smalls" will randomly change into different phrases from an array
function words() {
    var ranOptionNum = Math.floor(Math.random() * options.length);
    setOption(ranOptionNum);
    localStorage.setItem("prevOption", ranOptionNum);
}

window.onload = function () {
    var prevOption = localStorage.getItem("prevOption")
    if (prevOption != null) {
        setOption(prevOption);
    }
}

function setOption(prevOption) {
    document.getElementById("smallsbtn").innerHTML = options[prevOption];
    resetOptions();
}

function resetOptions() {
    setTimeout(() => {
        document.getElementById("smallsbtn").innerHTML = "Smalls";
        localStorage.removeItem("prevOption");
    }, "5000");
}

