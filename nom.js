let button = document.getElementById("searchbtn");
let type = document.getElementsByClassName("type");
let found = document.getElementsByClassName("found");
let text = document.getElementsByClassName("text");
let number = document.getElementById("number");
button.addEventListener("click", function (e) {


    fetch(`http://numbersapi.com/${searchbtn.value}?json`)
    .then(function (res) {return res.json();})
    .then(function (data) {
        text.innerText = data.text;
        type.innerText = data.type;
        number.innerText = data.number;
        type.innerText = data.type;
        found.innerText = data.found;
            button.innerText = data.searchbtn;
        });

});

